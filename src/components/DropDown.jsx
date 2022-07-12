import React from 'react'

const DropDown = (props) => {
  return (
    <div className="faq">
        <div className="faq_text">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
        <span className="btn">&#43;</span>
    </div>
  )
}
export default DropDown
