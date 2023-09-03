import { React, useEffect, useState } from "react";
import {
	fetchAPI,
	cookiesRequired,
	getCookie,
	HOST_URL,
	reqOptions,
} from "../components/static/assets/js/help_func";
import PaginationQuiz from "../components/quiz-pagination/PaginationQuiz";
import { PageLoading } from "../components/forms/PageLoading";
import { useSearchParams } from "react-router-dom";
import Records from "../components/quiz-pagination/Record";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";
import "../components/static/assets/js/quiz-test.js";
import { LoginRequired } from "../components/forms/LoginRequired";

function QuizTest() {
	// Required
	cookiesRequired();
	LoginRequired();

	// get access token
	let params = new URL(document.location).searchParams;

	// To hold the actual data
	const [data, setData] = useState([]);
	const [status, setStatus] = useState("loading");
	const [url_path] = useState(params.get("slug"));
	const [submitAnswer, setSubmitAnswer] = useState([]);
	// const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(0);
	const [recordsPerPage] = useState(1);
	const [duration, setDuration] = useState();
	const [searchParams, setSearchParams] = useSearchParams();
	const [shuffledArray, setShuffledArray] = useState();
	const [itemsPerPage, setItemsPerPage] = useState(1);
	let current_records = [];

	const answerData = {};

	useEffect(() => {
		if (data.length === 0) {
			const requestOptions = reqOptions("GET", null, true);
			let new_path =
				HOST_URL() + `/api/v1/assessments/skills/quiztest/${url_path}/`;
			fetchAPI(setData, new_path, requestOptions, true, setStatus);
		}

		// eslint-disable-next-line
	}, [data, duration, current_records]);
	if (
		localStorage.getItem("current_page") !== null &&
		localStorage.getItem("current_page") > currentPage
	) {
		setCurrentPage(Number(localStorage.getItem("current_page")));
	}

	// Shuffle Objects
	const shuffleArray = (array) => {
		return array.sort(() => Math.random() - 0.5);
	};

	if (data["a_assessment"] && !shuffledArray) {
		// const dataArray = Object.entries(data['a_assessment']).map(([key, value]) => [key, value]);
		setShuffledArray(shuffleArray(data["a_assessment"]));
	}

	const assessment = shuffledArray;
	// const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

	let nPages = null;

	if (assessment) {
		// get pagination if data object
		// current_records = assessment.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage); // single object
		current_records = assessment[currentPage];

		nPages = Math.ceil(assessment.length / recordsPerPage);

		// Change button label if last item
		if (currentPage === nPages - 1) {
			// Change button text
			const quizBtn = document.getElementById("btn_label");
			if (quizBtn) {
				quizBtn.textContent = "See Results";
				quizBtn.parentElement.style.backgroundColor = "var(--CaribbeanGreen)";
			}
		}
	}

	if (nPages && current_records && current_records.pk) {
		return (
			<div>
				<div
					id="quizcontainer"
					className="container mt-8"
					// onClick={e=>{
					//     submitAnswerToDB(e)
					// }
					// }
				>
					<h3>
						Question {currentPage + 1} of {nPages}:
					</h3>

					<Records
						data={current_records}
						try_count={data.try_count}
						setSubmitAnswer={setSubmitAnswer}
						setStatus={setStatus}
						currentPage={currentPage}
						nPages={nPages}
						setCurrentPage={setCurrentPage}
						pagDuration={data["duration"]}
						dataArray={shuffledArray}
						itemsPerPage={itemsPerPage}
					/>
				</div>
				<div className="from">
					<h3>from</h3>
					<img
						src={
							require("../components/static/assets/svgs/instincthub_logo.svg")
								.default
						}
						alt="instincthub Logo"
					/>
				</div>
			</div>
		);
	} else if (status == "loading") {
		return <PageLoading labels={"Quiz"} />;
	} else if (status === 404) {
		return (
			<div className="container mt-9">
				<h3>Details not found</h3>
			</div>
		);
	}
}

export default QuizTest;
