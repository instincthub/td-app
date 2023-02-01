import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = (props) => {
    // store duration so when user refreshes, time resumes
    const navigate = useNavigate();
    
    let min = Number(localStorage.getItem('quiz_duration_min')) 
    let sec = Number(localStorage.getItem('quiz_duration_sec'))
    const [ minutes, setMinutes ] = useState(min > 0 ? min: 0);
    const [seconds, setSeconds ] =  useState(sec ? sec: 0);

    useEffect(()=>{

        if (localStorage.getItem('quiz_duration_min') === null || localStorage.getItem('quiz_duration_min') === 'undefined') {
            setMinutes(props.duration)
        }
        
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    // Trigger quiz submission
                    localStorage.removeItem('quiz_duration_min')
                    localStorage.removeItem('quiz_duration_sec')
                    localStorage.removeItem('current_page')
                    
                    navigate(`/quiz/quiztest/results/?user_id=${props.user_id}&assessment_id=${props.assessment_id}&counts=${props.try_count}/`)

                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        localStorage.setItem('quiz_duration_min', minutes)
        localStorage.setItem('quiz_duration_sec', seconds)
        return ()=> {
            clearInterval(myInterval);
        };
        
    });


        

    return (
        <div id="timespent">
        { minutes === 0 && seconds === 0
            ? null
            : <h3> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h3> 
        }
        </div>
    )
}

export default Timer;