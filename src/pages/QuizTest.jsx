import {React, useEffect, useState} from "react";
import { fetAPI, loginRequired, cookiesRequired, getCookie, HOST_URL } from "../components/static/assets/js/help_func";
import PaginationQuiz from "../components/quiz-pagination/PaginationQuiz";
import Records from "../components/quiz-pagination/Record";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";
import "../components/static/assets/js/quiz-test.js";

function QuizTest() {

    // Required 
    cookiesRequired()
    loginRequired(getCookie('access'))

    // To hold the actual data
    const [data, setData] = useState([])
    // const [submitAnswer, setSubmitAnswer] = useState([])
    // const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    // const [duration, setDuration] = useState();
    const [recordsPerPage] = useState(1);

    const answerData = {}

    useEffect(() => {
        
        // console.log('Previous response: ', submitAnswer)
        // get assessment from db
        var myHeaders = new Headers();
        let u_access = "Bearer " + getCookie('access')
        myHeaders.append("Authorization", u_access)

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        // console.log(requestOptions)

        fetAPI(setData, HOST_URL()+"/assessment/quiztest/1", requestOptions, true)

        // eslint-disable-next-line
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
       
        nPages = Math.ceil(assessment.length / recordsPerPage)
        // console.log(data['duration'])

        if (localStorage.getItem('quiz_duration_min') === null || localStorage.getItem('quiz_duration_sec') === null || localStorage.getItem('quiz_duration_min') === 'undefined') {
            localStorage.setItem('quiz_duration_min', data['duration'])
            localStorage.setItem('quiz_duration_sec', 0)
        }
        

        // Get user id and tech diversity
        user_id = Number(getCookie('u_id'))
        assessment_id = current_records[0]['assessment']

        answerData['user'] = user_id
        answerData['assessment'] = assessment_id
        answerData['tech_diversity'] = data['a_tech_diversity'][0]['pk']
        answerData['question'] = current_records[0]['pk']
    

        // Change button label if last item
        if (currentPage === nPages) { // Change button text
            const quizBtn = document.getElementById('btn_label')
            quizBtn.textContent = 'See Results'
            quizBtn.parentElement.style.backgroundColor = "var(--CaribbeanGreen)"
        }
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
                    "Authorization": `Bearer ${getCookie('access')}`,
                  },
                body: JSON.stringify(answerData)
            };
            
            fetAPI(setData, HOST_URL()+"/assessment/answer/", requestOptions, true)
           
        }
        
    }
    if (assessment) {
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
                    
                    <Records data={current_records}/>
                    
                    <PaginationQuiz
                        nPages={nPages}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        duration={data['duration']}
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
}

export default QuizTest;