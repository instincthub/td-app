import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
import { checkEnv } from "../components/static/assets/js/help_func";
import { fetAPI } from "../components/static/assets/js/help_func";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";

function QuizResults() {
    const [data, setData] = useState([])

	useEffect(() => {
		// get assessment from db
        const requestOptions = {
            method: 'GET'
        };

		if (checkEnv() === "production") {
			fetAPI(setData, "https://api.instincthub.com/assessment/answer/results/94/1/", requestOptions)
		  }
		  else if(checkEnv() === "local"){ // Fetch quiz result
			fetAPI(setData, "http://127.0.0.1:8000/assessment/answer/results/94/1/", requestOptions, true)
		  }
    }, [])

  return (
    <div>
      <Navbar />
		<div className="container">
			<div className="m-b-50 mb-7 pt-4">
				<div className="mt-10">
					<div className="quiz_header">
						<h1>Quiz Result: {data.title}</h1>
						
					</div>
					<div className="signup__list">
						<p>Scored: {data.score}</p>
						<h2 className="sub_header">Got {data.points} points</h2>
						
                        <p className="mt-3">{data.met_expectation ? "Congratulation, you qualified!" : "You didn't have enough point. Try again next year. "} <strong> We've emailed you.</strong></p>
						{/* <div className="mt-4">
                            <Link to="/quiz/quiztest"><button className="outlined-btn d-inline-block">Start Quiz</button></Link>
						</div> */}
					</div>
				</div>
			</div>
		</div>
      <Footer />
    </div>
  );
}

export default QuizResults;
