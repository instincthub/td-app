import {React, useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
// import { Navbar, Banner, Features } from "./";
import {clickRadio, clickNextButton, startTimer} from "../components/static/assets/js/quiz-test";
import {SubmitButton} from "../components/SubmitButton"
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
    
    const assessment = data['a_assessment']
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    let current_records =[]
    let nPages = null
    if (assessment) { // get pagination if data object
        current_records = assessment.slice(indexOfFirstRecord, indexOfLastRecord); // single object

        nPages = Math.ceil(assessment.length / recordsPerPage)
        duration = data['duration']

        // Get user id and tech diversity
        answerData['user'] = Number(localStorage.getItem('u_id'))
        answerData['tech_diversity'] = data['a_tech_diversity'][0]['pk']
        answerData['assessment'] = current_records[0]['assessment']
        answerData['question'] = current_records[0]['pk']
        
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

            console.log('================>>>>', answerData)
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
        window.location.href = "/quiz/quiztest/result"
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
