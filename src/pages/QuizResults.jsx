import React, {useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetAPI, loginRequired, getCookie, HOST_URL } from "../components/static/assets/js/help_func";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";

function QuizResults() {
    const [data, setData] = useState([])
	loginRequired(getCookie('access'))

	useEffect(() => {
		// get access token
		let params = (new URL(document.location)).searchParams;
		let assessment_id = params.get('assessment_id'); // is the string "token".
		let u_id = params.get('user_id'); 
		// console.log(data)

		// get assessment from db
        const requestOptions = {
            method: 'GET',
			headers: {
				"Authorization": `Bearer ${getCookie('access')}`,
			}
        };

		fetAPI(setData, `${HOST_URL()}/api/v1/assessment/answer/results/${u_id}/${assessment_id}/`, requestOptions, true)

		  
	// eslint-disable-next-line
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
						
                        <p className="mt-3">{data.met_expectation ? "Congratulation, you met expectation! Keep Learning" : "You didn't have enough point. Relearn and come try again"} 
						{
							data.tdn === false ? 
							<strong> <a href={`/quiz/quiztest/?slug=${data.slug}`}>{data.step ? 'Retake Quiz' : ''}</a></strong>
							:''
						}
						
						</p>
						<div className="mt-4">
                            <a href={data.met_expectation === true && data.tdn === true ? data.whatsapp_group : 'https://chat.whatsapp.com/IvuvWu6DtwR3PWp0mUWJRn'} target="_blank" rel="noreferrer"><button className="primary-btn d-inline-block"><span>Join WhatsApp Group</span></button></a>
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
