import { React, useState } from "react";
import styled from "styled-components";
import {
	fetchAPI,
	HOST_URL,
	getCookie,
	reqOptions,
} from "./static/assets/js/help_func";

function Overview() {
	const [cohort, setCohort] = useState();
	const [courseChoice, setCourseChoice] = useState();
	useState(() => {
		const requestOptions = reqOptions("GET", null);

		fetchAPI(
			setCourseChoice,
			HOST_URL() + "/api/v1/assessments/skills/course_choice/",
			requestOptions,
			true
		);
		fetchAPI(
			setCohort,
			HOST_URL() + "/api/v1/assessments/skills/cohort/",
			requestOptions,
			true
		);
	});
	return (
		<Wrap>
			<div
				className="container tech_overview"
				itemScope
				itemType="https://ft.intsincthub.com/enrol"
			>
				<div className="purpose">
					<h2 itemProp="overview">Overview</h2>
					<div itemProp="description">
						<p>
							According to the Nigeria Bureau of Statistics (NBS),{" "}
							<strong>33.3%</strong> of Nigerians are unemployed. With over{" "}
							<strong>200 million</strong> population,{" "}
							<strong>66.2 million</strong> Nigerians are out of a job.
						</p>
						<p>
							Tech Diversity by{" "}
							<a href="https://instincthub.com" target="blank">
								<strong className="instincthub_link">InstinctHub</strong>
							</a>{" "}
							is structured to train 100,000 individuals each year and place 20%
							into direct jobs, which will create wealth for families locked out
							of employment opportunities.
						</p>

						<p>
							We have scheduled 3 cohorts for this year, each cohort will last
							for 12 weeks. Participants will have the privilege to pick any of
							the listed tracks below.
						</p>
						{courseChoice ? (
							<ol>
								<h3>Courses</h3>
								{courseChoice.results.map((option, index) => {
									return <li key={index}>{option.title}</li>;
								})}
							</ol>
						) : (
							""
						)}

						{cohort ? (
							<ol className="mt-5">
								<h3>Cohorts:</h3>
								{cohort.results.map((option, index) => {
									return <li key={index}>{option.title}</li>;
								})}
							</ol>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</Wrap>
	);
}

export default Overview;

const Wrap = styled.div`
	h3 {
		font-size: 1.2em;
		font-weight: 600;
		margin-bottom: 10px;
		margin-top: 20px;
	}
`;
