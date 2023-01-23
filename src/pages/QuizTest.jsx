import {React, useEffect, useState} from "react";
import { fetchAPI, loginRequired, cookiesRequired, getCookie, HOST_URL, reqOptions } from "../components/static/assets/js/help_func";
import PaginationQuiz from "../components/quiz-pagination/PaginationQuiz";
import { PageLoading } from "../components/forms/PageLoading";
import { useSearchParams } from "react-router-dom";
import Records from "../components/quiz-pagination/Record";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/quiz-test.css";
import "../components/static/assets/js/quiz-test.js";

function QuizTest() {

    // Required 
    cookiesRequired()
    loginRequired(getCookie('u_id'))

    // get access token
    let params = (new URL(document.location)).searchParams;

    // To hold the actual data
    const [data, setData] = useState([])
    const [status, setStatus] = useState('loading')
    const [url_path] = useState(params.get('slug'))
    const [submitAnswer, setSubmitAnswer] = useState([])
    // const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(1);
    const [duration, setDuration] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    // const [assessment_id, setAssessment_id] = useState();

    const answerData = {}

    useEffect(() => {

        const requestOptions =  reqOptions("GET", null, true)
        
        let new_path = (HOST_URL()+`/api/v1/assessment/quiztest/${url_path}/`)
        // console.log(new_path);
        fetchAPI(setData, new_path, requestOptions, true, setStatus)
    

        

        // eslint-disable-next-line
    }, [duration])
    if (localStorage.getItem('current_page') !== null && localStorage.getItem('current_page') > currentPage) {
        setCurrentPage(Number(localStorage.getItem('current_page')))
    }
    // setDuration(data['duration'])

    // console.log(data['duration'])
    
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

       
        

        // Get user id and tech diversity
        user_id = Number(getCookie('u_id'))
        assessment_id = current_records[0]['assessment']

        answerData['user'] = user_id
        answerData['assessment'] = assessment_id
        // answerData['tech_diversity'] = data['a_tech_diversity'][0]['pk']
        answerData['question'] = current_records[0]['pk']
    

        // Change button label if last item
        if (currentPage === nPages) { // Change button text
            const quizBtn = document.getElementById('btn_label')
            if (quizBtn) {
                quizBtn.textContent = 'See Results';
                quizBtn.parentElement.style.backgroundColor = "var(--CaribbeanGreen)";
            }
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


            // const requestOptions = {
            //     method: 'post',
            //     headers: { 
            //         'Content-Type': 'application/json',
            //         "Authorization": `Bearer ${getCookie('access')}`,
            //       },
            //     body: JSON.stringify(answerData)
            // };

            const formData = new FormData()
            for (let key in answerData) formData.append(key, answerData[key]);

            const requestOptions =  reqOptions("POST", formData, true)
            
            fetchAPI(setSubmitAnswer, HOST_URL()+"/api/v1/assessment/answer/", requestOptions, true, setStatus)
           
        }
        
    }
    if (nPages) {
        return (
            
            <div>
            
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
    else if (status == 'loading') {
        return(
            <PageLoading labels={'Quiz'}/>
        )
    }
    else if (status === 404){
        return(
            <div className="container mt-9">
                <h3>Details not found</h3>
            </div>
        )
    }
}

export default QuizTest;