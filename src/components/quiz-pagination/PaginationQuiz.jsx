import React from 'react'
import { SubmitButton } from '../SubmitButton'
import Timer from '../Timer'

const PaginationQuiz = ({ nPages, currentPage, setCurrentPage, duration }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    

    const nextPage = () => {
            if(currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <div id="answerbuttoncontainer">
                <SubmitButton 
                    type="button"
                    label="Next ❯"
                    clicks={nextPage}
                    />
                    <Timer duration={duration}/>

            </div>
    )
}

export default PaginationQuiz