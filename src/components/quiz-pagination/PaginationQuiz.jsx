import React from 'react'
import { SubmitButton } from '../SubmitButton'
import Timer from '../Timer'

const PaginationQuiz = ({ nPages, currentPage, setCurrentPage, duration, user_id, assessment_id, try_count, ...props}) => {

    // eslint-disable-next-line 
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    
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
                    type="submit"
                    label="Next ❯"
                    // clicks={nextPage}
                    />
                    <Timer 
                        duration={duration}
                        user_id={user_id}
                        assessment_id={assessment_id}
                        try_count={try_count}
                        />

            </div>
    )
}

export default PaginationQuiz