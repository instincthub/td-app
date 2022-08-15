import React from "react";
import { useEffect } from "react";
import '../components/static/assets/scss/otp-input.css'
import $ from 'jquery';
import { SubmitButton } from "./SubmitButton";

// Source: https://codepen.io/johnhoulder/pen/VOKJPo

export const OTPInput = (...props) =>{

    useEffect(() => {  

      // OTP length is 6 digit, inset user input in the respective index
      const spliceItem = (arr, index, new_value, type) => {
        const c = arr
      
        if (type === "add") {
          c.splice(index,1,new_value)
        }
        if (type === 'remove') {
          c.splice(index,1)
        }
      
        return c
      }

      let otp_input = props[0].event.state.otp;

      // Grab user input and move to the next input
      // Delete index when the user 'Backspace'
      $('.digit-group').find('input').each(function(index) {
        $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
          var parent = $($(this).parent());
          
          if(e.key === 'Backspace' || e.key === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));
            
            if(prev.length) {
              $(prev).select();
            }

            // Remove and update array index state with user input 
            otp_input= spliceItem(props[0].event.state.otp, index, $(this)[0].value, 'remove')

          } else if(Number(e.key) || e.key){
            var next = parent.find('input#' + $(this).data('next'));
            
            if(next.length) {
              $(next).select()
            } else {
              if(parent.data('autosubmit')) {
                // parent.submit();
              }
            }
            // Replace and update array index state with user input 
            otp_input= spliceItem(props[0].event.state.otp, index, $(this)[0].value, 'add')
          }
          
          props[0].event.setState({otp: otp_input})
        });
      });
      // eslint-disable-next-line
    }, [])


  return (
    <div className="otp_input">
      <div className="otp_wrapper">
        <h1>Two-step authentication</h1>
        <p className="prompt"> To continue, please enter the 6-digit verification code sent to your email: <strong>{props[0].event.state.items.email}</strong>.</p>
        <p className="retry">Didn't receive a code? <a href="/community/signup/campus-lead/">Resend.</a></p>
        <form method="get" id='regForm' className="digit-group" data-group-name="digits" data-autosubmit="false" autoComplete="off">
          <input type="number" id="digit-1" name="digit-1" data-next="digit-2" autoComplete="false"  autoFocus={true}/>
          <input type="number" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" autoComplete="false"/>
          <input type="number" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" autoComplete="false"/>
          <span className="splitter">&ndash;</span>
          <input type="number" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" autoComplete="false"/>
          <input type="number" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" autoComplete="false"/>
          <input type="number" id="digit-6" name="digit-6" data-previous="digit-5" autoComplete="false"/>
        </form>
        <p id="otpErr">
          <svg aria-hidden="true" class="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--warning-svg Icon-color-svg Icon-color--red-svg" height="12" width="12" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="m10.115 1.308 5.635 11.269A2.365 2.365 0 0 1 13.634 16H2.365A2.365 2.365 0 0 1 .25 12.577L5.884 1.308a2.365 2.365 0 0 1 4.231 0zM8 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM8 9c.552 0 1-.32 1-.714V4.714C9 4.32 8.552 4 8 4s-1 .32-1 .714v3.572C7 8.68 7.448 9 8 9z" fill-rule="evenodd"></path></svg>
          <span></span>
        </p>

        <SubmitButton label="Continue" clicks={()=>props[0].event.verifyOtp()}/>
      </div>
    </div>
    
  );

}