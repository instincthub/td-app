import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
import { checkEnv } from "../components/static/assets/js/help_func";
import { fetAPI, loginRequired, getCookie } from "../components/static/assets/js/help_func";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";

function QuizResults() {
    const [data, setData] = useState([])
	loginRequired(getCookie('access') !== 'null' ? 200 : 401)
	useEffect(() => {
		// get access token
		let params = (new URL(document.location)).searchParams;
		let assessment_id = params.get('assessment_id'); // is the string "token".
		let u_id = params.get('user_id'); 

		// get assessment from db
        const requestOptions = {
            method: 'GET',
			headers: {
				"Authorization": `Bearer ${getCookie('access')}`,
			}
        };
		console.log(`https://api.instincthub.com/assessment/answer/results/${u_id}/${assessment_id}/`)
		console.log(requestOptions)

		if (checkEnv() === "production") {
			fetAPI(setData, `https://api.instincthub.com/assessment/answer/results/${u_id}/${assessment_id}/`, requestOptions, true)
		  }
		  else if(checkEnv() === "local"){ // Fetch quiz result
			fetAPI(setData, `http://127.0.0.1:8000/assessment/answer/results/${u_id}/${assessment_id}/`, requestOptions, true)
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
						
                        <p className="mt-3">{data.met_expectation ? "Congratulation, you qualified!" : "You didn't have enough point. You can still learn a lot! "} <strong> We've emailed you.</strong></p>
						<div className="mt-4">
                            <a href={data.met_expectation == true ? data.whatsapp_group : 'https://chat.whatsapp.com/IvuvWu6DtwR3PWp0mUWJRn'} target="_blank"><button className="primary-btn d-inline-block"><span>Join WhatsApp Group</span></button></a>
						</div>
					</div>
				</div>
			</div>
		</div>
      <Footer />
    </div>
  );
}

export default QuizResults;
