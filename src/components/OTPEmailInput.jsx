import React from "react";
import { useEffect } from "react";
import '../components/static/assets/scss/otp-input.css'
import { SubmitButton } from "./SubmitButton";

// Source: https://codepen.io/johnhoulder/pen/VOKJPo

export const OTPEmailInput = (...props) =>{
    // const [otp, setOtp] = useState([]);

    useEffect(() => {    
      
    }, [])

  return (
    <div className="otp_input email_opt">
      <div className="email_wrapper">
        <h1>Campus Lead Signup</h1>
        
        <form 
          method="post" 
          data-group-name="digits" 
          autoComplete="off"
          id='regForm'
          onSubmit={(e)=>{
              e.preventDefault();
              props[0].event.postData(e.target, "POST", '/auth/campus/otp/')
            }
          }
          >
        <div className="personal_data inputData">
          <div className="input_parent">
              <input
                id="id_email"
                type="email"
                name="email"
                placeholder="user@example.com *"
                maxLength="250"
                required
              />
              <label htmlFor="id_email">user@example.com *</label>
            </div>
        </div>

        <SubmitButton label="Verify Email"/>

        </form>
        <p id="otpErr"></p>

       
      </div>
    </div>
    
  );

}