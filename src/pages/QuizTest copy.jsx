import {React, useEffect, useState} from "react";
import { fetAPI, cookiesRequired, getCookie, HOST_URL } from "../components/static/assets/js/help_func";
import PaginationQuiz from "../components/quiz-pagination/PaginationQuiz";
import Records from "../components/quiz-pagination/Record";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";
import "../components/static/assets/js/quiz-test.js";
import { LoginRequired } from "../components/forms/LoginRequired";

function QuizTest() {

    // Required 
    cookiesRequired()
    LoginRequired()

    // To hold the actual data
    const [data, setData] = useState([])
    // const [submitAnswer, setSubmitAnswer] = useState([])
    // const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    // const [duration, setDuration] = useState();
    const [recordsPerPage] = useState(1);
    const [assessment, setAssessment] = useState();
    const [nPages, setnPages] = useState(null);
    const [user_id] = useState(Number(getCookie('u_id')));
    const [assessment_id, setAssessment_id] = useState(null);
    const [current_records, setCurrent_records] = useState([]);

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
        setAssessment(data['a_assessment'])
        console.log()

    

        if (localStorage.getItem('current_page') !== null && localStorage.getItem('current_page') > currentPage) {
            setCurrentPage(Number(localStorage.getItem('current_page')))
        }
    
    
        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

    // let nPages = null
    // console.log(assessment)
    if (typeof(assessment)==='object') { // get pagination if data object
        console.log(indexOfLastRecord)
        setCurrent_records(assessment.slice(indexOfFirstRecord, indexOfLastRecord)); // single object
       
        setnPages(Math.ceil(assessment.length / recordsPerPage))
        console.log(nPages)

        if (localStorage.getItem('quiz_duration_min') === null || localStorage.getItem('quiz_duration_sec') === null || localStorage.getItem('quiz_duration_min') === 'undefined') {
            localStorage.setItem('quiz_duration_min', data['duration'])
            localStorage.setItem('quiz_duration_sec', 0)
        }

        // Get user id and tech diversity
        // user_id = Number(getCookie('u_id'))
        console.log(current_records)
        setAssessment_id(current_records[0]['assessment'])

        console.log(data['a_tech_diversity'])
        console.log(current_records[0]['pk'])
        

        if (data['a_tech_diversity']) {
            answerData['tech_diversity'] = data['a_tech_diversity'][0]['pk']
        }

        answerData['user'] = user_id
        answerData['assessment'] = assessment_id
        answerData['question'] = current_records[0]['pk']
    

        // Change button label if last item
        if (currentPage === nPages) { // Change button text
            const quizBtn = document.getElementById('btn_label')
            quizBtn.textContent = 'See Results'
            quizBtn.parentElement.style.backgroundColor = "var(--CaribbeanGreen)"
        }
    // }
    

    // Send response to db
    // const submitAnswerToDB = (e) =>{
        
    }
        // eslint-disable-next-line
    }, [data])

        return (
            
            <div>
            {/* <Navbar /> */}
                <div 
                id="quizcontainer" 
                className="container mt-8"
                onClick={e=>{
                    // submitAnswerToDB(e)
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

export default QuizTest;