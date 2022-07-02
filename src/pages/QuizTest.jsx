import {React, useEffect, useState} from "react";
import { fetAPI } from "../components/static/assets/js/help_func";
import PaginationQuiz from "../components/quiz-pagination/PaginationQuiz";
import Records from "../components/quiz-pagination/Record";

import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";
import "../components/static/assets/js/quiz-test.js";

function QuizTest() {
    // To hold the actual data
    const [data, setData] = useState([])
    const [submitAnswer, setSubmitAnswer] = useState([])
    // const [loading, setLoading] = useState(true);
    let duration = 0 // countdown minutes
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(1);

    const answerData = {}


    useEffect(() => {

        // get assessment from db
        const requestOptions = {
            method: 'GET'
        };
        fetAPI(setData, "http://127.0.0.1:8000/assessment/quiztest/1", requestOptions, true)
    }, [])

    if (localStorage.getItem('current_page') !== null && localStorage.getItem('current_page') > currentPage) {
        setCurrentPage(Number(localStorage.getItem('current_page')))
    }
    
    const assessment = data['a_assessment']
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    let current_records =[]
    let nPages = null
    let user_id, assessment_id;

    if (assessment) { // get pagination if data object
        current_records = assessment.slice(indexOfFirstRecord, indexOfLastRecord); // single object
        console.log(currentPage)
       
        nPages = Math.ceil(assessment.length / recordsPerPage)
        duration = data['duration']

        if (localStorage.getItem('quiz_duration_min') === null && localStorage.getItem('quiz_duration_sec') === null) {
            localStorage.setItem('quiz_duration_min', data['duration'])
            localStorage.setItem('quiz_duration_sec', 0)
        }
        

        // Get user id and tech diversity
        user_id = Number(localStorage.getItem('u_id'))
        assessment_id = current_records[0]['assessment']

        answerData['user'] = user_id
        answerData['assessment'] = assessment_id
        answerData['tech_diversity'] = data['a_tech_diversity'][0]['pk']
        answerData['question'] = current_records[0]['pk']
    }

    // Change button label if last item
    if (currentPage === nPages) { // Change button text
        const quizBtn = document.getElementById('btn_label')
        quizBtn.textContent = 'See Results'
        quizBtn.parentElement.style.backgroundColor = "var(--CaribbeanGreen)"
    }

    // Send response to db
    const submitAnswerToDB = (e) =>{

        // if target is btn and span
        if (e.target.getAttribute('type') === "button" || e.target.id === "btn_label") {
            const optionInputs = document.querySelectorAll('input[name="quiz"]')
            optionInputs.forEach((e)=>{ // Check for user selected option
                if (e.checked === true) {
                    answerData['option'] = Number(e.value)
                    e.checked = false
                }
            }) 

            
            if (currentPage === nPages) { // redirect to results
                localStorage.removeItem('quiz_duration_min')
                localStorage.removeItem('quiz_duration_sec')
                localStorage.removeItem('current_page')

                window.location.href = `/quiz/quiztest/results/?user_id=${user_id}&assessment_id=${assessment_id}`
            }


            const requestOptions = {
                method: 'post',
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answerData)
            };

            fetAPI(setSubmitAnswer, "http://127.0.0.1:8000/assessment/answer/", requestOptions, true)
        }
        
    }

    // End quiz when finish and timeout 
    const endQuiz = ()=>{
        
    };
    
  return (
    <div>
      {/* <Navbar /> */}
        <div 
        id="quizcontainer" 
        className="container mt-8"
        onClick={e=>{
            submitAnswerToDB(e)
        }}
        >

            <h3>Question {currentPage} of {nPages}:</h3>
            
            <Records 
                data={current_records} 
            />
            
            <PaginationQuiz
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                duration={duration}
                responseData = {answerData}
                user_id={user_id}
                assessment_id={assessment_id}
            />
    
        </div>
        <div className="from">
            <h3>from</h3>
            <img src={require("../components/static/assets/svgs/instincthub_logo.svg").default}
            alt="instincthub Logo" />
        </div>
    </div>
  );
}

export default QuizTest;
