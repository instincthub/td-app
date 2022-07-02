import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/modal.css";

function QuizInstruction() {
  return (
    <div>
      <Navbar />
		<div className="container">
			<div className="m-b-50 mb-7">
				<div className="mt-10">
					<div className="quiz_header">
						<h1>Tech Diversity Quiz</h1>
						<p>
							We want to know if you are fit for the challenge. The test is just a nice way to see how much you know how think and communicate. 
						</p>
					</div>
					<div className="signup__list">
						<h4 className="sub_header">Quiz Instruction</h4>
						<ol type="1" className="numbered-list">
							<li>
                                The test contains 20 questions and there is <strong>35 minutes</strong> time limit.
							</li>
							<li>
                                You will get 5 points for each correct answer. At the end of the Quiz, your total score will be displayed. Maximum score is 100 points.
							</li>
						</ol>
                        <h3 className="mt-3">Good luck!</h3>
						<div className="mt-4">
                            <button 
                                className="outlined-btn d-inline-block"
                                onClick={e=>{
                                    document.getElementById("myModal").style.display = "block";
                                }}
                                >Start Quiz
                            </button>
						</div>
					</div>
				</div>

                <div 
                    id="myModal" 
                    className="modal"
                    onClick={()=>{
                        document.getElementById("myModal").style.display = 'none'
                    }}
                    >
                    <div class="modal-content">
                        <span 
                            className="close"
                            onClick={()=>{
                                document.getElementById("myModal").style.display = 'none'
                            }}
                        >&times;</span>
                        <p>The time will start reading once you start. Ready? Hit the continue button!</p>

                        <div className="mt-4">
                            <Link to="/quiz/quiztest"><button className="outlined-btn d-inline-block mt-1">Continue...</button></Link>
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
