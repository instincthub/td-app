import React from 'react';
import { DatePick } from "../components/DatePick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fetAPI, spinBtn, handleError, getCookie, cookiesEnabled, cookiesRequired, HOST_URL } from "../components/static/assets/js/help_func";
import {SubmitButton} from '../components/SubmitButton'
import { ServerErr } from '../components/ServerErr';
import { Link } from 'react-router-dom';
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/register.css";
import "../components/static/assets/scss/custom-select.css";

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: null,
      error: null,
      b_cookies: cookiesEnabled()
    };
    // Binding this keyword 
    // this.updateState = this.componentDidMount.bind(this)
    this.handleSubmit = this.postData.bind(this)
  }
  componentDidMount(){
    // Check cookies
    cookiesRequired()
  }
  componentDidUpdate(){
    const {items, status} = this.state
    const registerForm = document.querySelector('#regForm')
    const inputParent = registerForm.querySelectorAll('.input_parent')

    inputParent.forEach(e=>{
      
      if (e.querySelector('.error')) {
        e.querySelector('input').style.borderColor = "#d0d0d0";
        e.querySelector('.error').textContent = "";
      }
    })

    // Handle error 400, null and else redirect to /quiz if success 
    handleError(status, items, registerForm, '/register/verify')
  }
  

  postData(form){
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    // Grab form data 
    let formData = {}; 
    form.querySelectorAll("input").forEach((node)=> {
      formData[node.name] = node.value;
      console.log(node.value)
    });

    formData['redirect_url'] = window.location.origin+'/register/details';
    formData['invalid_token_url'] = window.location.origin+'/register/invalid-token';
    formData['coupon'] = "TECH2.0"



    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Token " + getCookie('access'),
        'X-CSRFToken': getCookie('CSRF-TOKEN'),
        'Origin': window.location.origin
      },
      body: JSON.stringify(formData)
    };

    fetAPI(this, HOST_URL()+"/auth/register/", requestOptions, false)
  }
  
  render(){ 
      return (
        <div>
          <Navbar />
          <form 
            id='regForm'
            onSubmit={(e)=>{
              e.preventDefault();
              this.postData(e.target)
              }}>

              {/* Server Error State */}
              <div className='mt-10'>
                <ServerErr/>
              </div>


              <div className="container">
                <div className="diversity_assessment">
                  <h1>Tech Diversity Assessment</h1>

                  <p>
                  Thank you for being so interested in our tech diversity program! This application will take roughly 10 minutes and help us assess your suitability for the program. 
                  </p>

                  <p>
                  Please try and be as descriptive as possible and ensure all links can be accessed by a representative from InstinctHub using an @instincthub.com domain.
                  </p>
                  <p>Kindly follow all the social media handles below. While we encourage you to follow these pages for continuous updates, it is not part of the prerequisite:</p>

                  <h4>Schedules (12 weeks for each cohort):</h4>
                  <ul>
                    <li id="Duration"> TDN 3.0 : 1<sup>st</sup> March - 31<sup>st</sup> May 2023 </li>
                    <li id="Duration"> TDN 3.1 : 1<sup>st</sup> June - 31<sup>st</sup> August 2023 </li>
                    <li id="Duration"> TDN 3.2 : 1<sup>st</sup> September - 30<sup>th</sup> November 2023 </li>
                  </ul>
                  <p> P.S. The 3 month training is Free for shortlisted individuals.</p>
                </div>
              </div>
            
            <section className="container">

              {/* Registration Form */}
              <div className="diversity_data register">
                <h2>Signup for Tech Diversity</h2>

                <div className="personal_data d-flex d-wrap d-between">
                  <div className="input_parent width-48">
                    <input type="text" placeholder="Username *" name="username" id="id_username" autoFocus required/>
                    <label htmlFor="id_username">Username *</label>
                  </div>
                  <div className="input_parent width-48">
                    <input type="email" placeholder="Email *" id="id_email" maxLength="254" name="email" required/>
                    <label htmlFor="id_email"> Email *</label>
                  </div>
                  <div className="input_parent width-48">
                    <input type="text" placeholder="Full Name *" name="first_name" id="id_first_name" required/>
                    <label htmlFor="id_first_name">First Name *</label>
                  </div>
                  <div className="input_parent width-48">
                    <input type="text" placeholder="Last Name *" name="last_name" id="id_last_name" required/>
                    <label htmlFor="id_last_name">Last Name *</label>
                  </div>
                  <div className="input_parent width-48">
                    <input type="password" placeholder="Password *" name="password" id="id_password" required/>
                    <label htmlFor="id_password">Password *</label>
                  </div>
                  <div className="input_parent width-48">
                    <input type="password" placeholder="Confirm Password *" name="password2" id="id_password2" required />
                    <label htmlFor="id_password2">Confirm Password *</label>
                  </div>
                  <div className="input_parent width-48">
                    <input type="tel" placeholder="WhatsApp Number *" name="phone" id="id_phone" required/>
                    <label htmlFor="id_phone">WhatsApp Number *</label>
                  </div>
                  <DatePick 
                    placeholder="Date of Birth*" 
                    labelText="Date of Birth*" 
                    addClass="width-48"
                    id='id_date_of_birth' 
                    name='id_date_of_birth' 
                    required={true}
                  />
                </div>
                <SubmitButton label="Signup"/>
                <br></br>
                <Link className='inline-link' to="/login/">Login an existing account</Link>
              </div>

              {/* <div className='reg_closed'>
                <br/>
                <br/>
                <h3>Registration has been closed.</h3>
                <p>Registration for this programme has been closed as we are currently in session.</p>
                <p>We appreciate your interest!</p>
                <br/>
                <br/>
              </div> */}
              
            </section>
            </form>
          <Footer />
        </div>
      );
  }
}

export default Register;
