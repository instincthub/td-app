import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './static/assets/scss/date-pick.css'

export const DatePick = ({placeholder, labelText, id, name, required, ...props}) =>{
    const [startDate, setStartDate] = useState(null);

    // Append label to date input
    const labelTag = () =>{
      if (!document.querySelector('.react-datepicker__input-container label')){
        const labelTag = document.createElement('label')
        labelTag.textContent = labelText
        document.querySelector('.react-datepicker__input-container').append(labelTag)
      }
    }

  return (
    <div class="input_parent" 
    onClick={(e)=>{ // Listen to input focus
      if (e.target.classList.contains('react-datepicker-ignore-onclickoutside')){
        labelTag();
      }
    }}>
    <DatePicker 
    dateFormat= {"yyyy-mm-dd"}
    selected={startDate}
    placeholderText={placeholder}
    peekNextMonth
    showMonthDropdown
    showYearDropdown
    dropdownMode="select"
    DisablePrevMonthButton
    DisableNextMonthButton
    id={id} 
    name={name} 
    required={required}
    onChange={(date) =>setStartDate(date)}
      {...props}
      />
    
  </div>
    
  );

}