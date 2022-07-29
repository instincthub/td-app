import React from 'react'
import { SubmitButton } from '../SubmitButton'
import Timer from '../Timer'

const PaginationQuiz = ({ nPages, currentPage, setCurrentPage, duration, user_id, assessment_id }) => {

    // eslint-disable-next-line 
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const nextPage = () => {
            if(currentPage !== nPages) {
                setCurrentPage(currentPage + 1)
                localStorage.setItem('current_page', currentPage + 1)
            }
            
    }
    // eslint-disable-next-line 
    const prevPage = () => {
        if(currentPage !== 1) {
            setCurrentPage(currentPage - 1)
            localStorage.setItem('current_page', currentPage - 1)
        }
        
    }
    return (
        <div id="answerbuttoncontainer">
                <SubmitButton 
                    type="button"
                    label="Next ❯"
                    clicks={nextPage}
                    />
                    <Timer 
                        duration={duration}
                        user_id={user_id}
                        assessment_id={assessment_id}
                        />

            </div>
    )
}

export default PaginationQuiz