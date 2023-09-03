import { React, useState } from "react";
import PaginationQuiz from "./PaginationQuiz";
import { clickRadio } from "../static/assets/js/quiz-test";
import {
	getCookie,
	fetchAPI,
	reqOptions,
	HOST_URL,
} from "../static/assets/js/help_func";
import { useNavigate } from "react-router-dom";

const Records = ({ data, dataArray, ...props }) => {
	const navigate = useNavigate();

	const [showResults, setShowResults] = useState(false);

	const nextPage = () => {
		if (
			props.currentPage <
			Math.ceil(dataArray.length / props.itemsPerPage) - 1
		) {
			props.setCurrentPage(props.currentPage + 1);
			localStorage.setItem("current_page", props.currentPage + 1);
		}

		if (props.currentPage === props.nPages - 1) {
			setShowResults(true);
			localStorage.removeItem("quiz_duration_min");
			localStorage.removeItem("quiz_duration_sec");
			localStorage.removeItem("current_page");

			navigate(
				`/quiz/quiztest/results/?user_id=${getCookie("u_id")}&assessment_id=${
					data.assessment
				}&counts=${props.try_count}`
			);
		}
	};

	// Send response to db
	const submitAnswerToDB = (e) => {
		const formData = new FormData(e);
		formData.append("try_count", props.try_count);

		const requestOptions = reqOptions("POST", formData, true);

		fetchAPI(
			props.setSubmitAnswer,
			HOST_URL() + "/api/v1/assessment/skills/answer/",
			requestOptions,
			true,
			props.setStatus
		);

		// Update the setShowResults state in PaginationQuiz
		if (showResults) {
			// redirect to results
		}

		e.reset();

		// Handle
		nextPage();
	};

	return (
		<div>
			<p id="qtext">{data.question}</p>

			<form
				role="form"
				id="quizform"
				name="quizform"
				// data-end={props.currentPage === props.nPages ? true : false}
				onSubmit={(e) => {
					e.preventDefault();
					submitAnswerToDB(e.target);
				}}
			>
				<input
					type="number"
					hidden
					name="assessment"
					defaultValue={data.assessment}
				/>
				<input
					type="number"
					hidden
					name="user"
					defaultValue={getCookie("u_id")}
				/>

				{/* <input type="hidden" name="starttime" value="6/30/2022 9:03:25 PM"/>
                <input type="hidden" name="answers" />
                <input type="hidden" name="nextnumber"/>
                <input type="hidden" name="prevnumber" value="1"/> */}

				<div>
					<div id="altcontainer" className="notranslate">
						{data.q_option.map((item, index) => (
							<div key={index}>
								{index === 1 ? (
									<input
										type="number"
										hidden
										name="question"
										defaultValue={item.question}
									/>
								) : (
									""
								)}
								<label
									className="radiocontainer checkedlabel"
									id={"label" + (index += 1)}
								>
									<span>{item.option}</span>
									<input
										type="radio"
										name="option"
										id={item.pk}
										// onClick={(e)=>{
										//     clickRadio(e.target)
										// }}
										value={item.pk}
									/>
									<span className="checkmark"></span>
								</label>
							</div>
						))}
					</div>
				</div>

				<PaginationQuiz
					nPages={props.nPages}
					currentPage={props.currentPage}
					setCurrentPage={props.setCurrentPage}
					duration={props.pagDuration}
					user_id={getCookie("u_id")}
					assessment_id={data.assessment}
					try_count={props.try_count}
					setShowResults={setShowResults}
					dataArray={dataArray}
					itemsPerPage={props.itemsPerPage}
				/>
			</form>
		</div>
	);
};

export default Records;
