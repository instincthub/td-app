import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (duration, ...props) => {
    const [ minutes, setMinutes ] = useState(duration.duration);
    const [seconds, setSeconds ] =  useState(0);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    // Trigger quiz submission
                    
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
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