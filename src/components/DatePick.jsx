import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './static/assets/scss/date-pick.css'

export const DatePick = ({placeholder, labelText, id, name, required, addClass, ...props}) =>{
    const [startDate, setStartDate] = useState();

    // Append label to date input
    const labelTag = () =>{
      if (!document.querySelector('.react-datepicker__input-container label')){
        const labelTag = document.createElement('label')
        labelTag.textContent = labelText
        document.querySelector('.react-datepicker__input-container').append(labelTag)
      }
    }

  return (
    <div className={"input_parent " + addClass }
    onClick={(e)=>{ // Listen to input focus
      if (e.target.classList.contains('react-datepicker-ignore-onclickoutside')){
        labelTag();
      }
    }}>
    <DatePicker 
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={(date) =>setStartDate(date)}
      placeholderText={placeholder}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      id={id} 
      name={name} 
      required={required}
      autoComplete="off"
      {...props}
    />
    
  </div>
    
  );

}