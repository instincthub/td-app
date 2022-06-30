import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";

function QuizInstruction() {
  return (
    <div>
      <Navbar />
		<div className="container">
			<div className="m-b-50 mb-7">
				<div class="mt-10">
					<div class="quiz_header">
						<h1>Tech Diversity Quiz</h1>
						<p>
							We want to know if you are fit for the challenge. The test is just a nice way to see how much you know how think and communicate. 
						</p>
					</div>
					<div class="signup__list">
						<h4 class="sub_header">Quiz Instruction</h4>
						<ol type="1" class="numbered-list">
							<li>
                                The test contains 20 questions and there is <strong>35 minutes</strong> time limit.
							</li>
							<li>
                                You will get 5 points for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 100 points.
							</li>
						</ol>
                        <h3 className="mt-3">Good luck!</h3>
						<div className="mt-4">
                            <Link to="/quiz/quiztest"><button className="outlined-btn d-inline-block">Start Quiz</button></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
      <Footer />
    </div>
  );
}

export default QuizInstruction;
