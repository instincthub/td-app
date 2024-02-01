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
							As per the Nigeria Bureau of Statistics (NBS), unemployment
							affects 40.1% of Nigerians. Given the nation's population of over
							200 million, this translates to approximately 80.2 million
							individuals without employment.
						</p>
						<p>
							In response to this, Tech Diversity by{" "}
							<a href="https://instincthub.com" target="blank">
								<strong className="instincthub_link">InstinctHub</strong>
							</a>{" "}
							has been designed to annually train 100,000 individuals, with the
							aim of securing direct employment for 20% of them. This initiative
							is expected to generate wealth for families who have been excluded
							from employment opportunities.
						</p>
						<p>
							For this year, we have planned three cohorts, each lasting 12
							weeks. Participants will have the opportunity to choose from any
							of the tracks listed below.
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
