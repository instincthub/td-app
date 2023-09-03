import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
	getCookie,
	fetchAPI,
	HOST_URL,
	setCookie,
	reqOptions,
} from "../components/static/assets/js/help_func";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/modal.css";
import { PageLoading } from "../components/forms/PageLoading";
import { LoginRequired } from "../components/forms/LoginRequired";

function QuizInstruction() {
	const [data, setData] = useState();
	const [status, setStatus] = useState();
	const [searchParams, setSearchParams] = useSearchParams();
	const q_param = searchParams.get("slug");

	// Store access
	if (
		searchParams.get("access_token") &&
		searchParams.get("refresh_token") &&
		searchParams.get("id") &&
		searchParams.get("username")
	) {
		setCookie("access", searchParams.get("access_token"), 30);
		setCookie("refresh", searchParams.get("refresh_token"), 30);
		setCookie("u_id", searchParams.get("id"), 30);
		setCookie("username", searchParams.get("username"), 30);
	} else {
		LoginRequired();
	}

	useState(() => {
		if (!data) {
			const requestOptions = reqOptions("GET", null, true);
			fetchAPI(
				setData,
				HOST_URL() + "/api/v1/assessments/skills/instructions/" + q_param,
				requestOptions,
				true,
				setStatus
			);
		}
	}, [status]);

	if (data) {
		return (
			<div>
				<Navbar />
				{data && data.description ? (
					<QuizInstructionWrap className="container">
						<div className="m-b-50 mb-7">
							<div className="mt-10">
								<div className="quiz_header">
									<h1>Assessment</h1>
								</div>
								<div className="signup__list">
									<ReactMarkdown>{data.description}</ReactMarkdown>

									<div className="mt-4">
										<button
											className="outlined-btn d-inline-block"
											onClick={(e) => {
												document.getElementById("myModal").style.display =
													"block";
											}}
										>
											Start Quiz
										</button>
									</div>
								</div>
							</div>

							<div
								id="myModal"
								className="modal"
								onClick={() => {
									document.getElementById("myModal").style.display = "none";
								}}
							>
								<div class="modal-content">
									<span
										className="close"
										onClick={() => {
											document.getElementById("myModal").style.display = "none";
										}}
									>
										&times;
									</span>
									<p>
										The countdown will begin reading once you start. Ready? Hit
										the continue button!
									</p>

									<div className="mt-4">
										<Link to={"/quiz/quiztest/?slug=" + data.slug}>
											<button className="outlined-btn d-inline-block mt-1">
												Continue...
											</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</QuizInstructionWrap>
				) : (
					<PageLoading labels={"Instruction"} />
				)}

				<Footer />
			</div>
		);
	} else if (status === 404) {
		return (
			<div>
				<Navbar />
				<QuizInstructionWrap className="container">
					<div className="m-b-50 mb-7">
						<div className="mt-10">
							<h2>No assigned assessment to this URL.</h2>
						</div>
					</div>
				</QuizInstructionWrap>
			</div>
		);
	}
}

export default QuizInstruction;

const QuizInstructionWrap = styled.div`
	h1 {
		font-size: 2.5em;
	}
	h2 {
		font-size: 1em;
		margin-bottom: 20px;
	}
	h3 {
		font-size: 0.8em;
	}
`;
