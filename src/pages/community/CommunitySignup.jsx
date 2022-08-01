import React from 'react';
import { DatePick } from "../../components/DatePick";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { fetAPI, spinBtn, handleError, getCookie, cookiesEnabled, cookiesRequired, HOST_URL } from "../../components/static/assets/js/help_func";
import {SubmitButton} from '../../components/SubmitButton'
import { ServerErr } from '../../components/ServerErr';
import { Link } from 'react-router-dom';
// import { Navbar, Banner, Features } from "./";
import "../../components/static/assets/scss/staff.css";
import "../../components/static/assets/scss/diversity.css";
import "../../components/static/assets/scss/register.css";

class CommunitySignup extends React.Component {

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

    // Handle error 400, null and else redirect to /register/verify if success 
    handleError(status, items, registerForm, '/register/verify')
  }
  

  postData(form){
    // spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    // Grab form data 
    let formData = {}; 
    form.querySelectorAll("input").forEach((node)=> {
      formData[node.name] = node.value;
    });

    formData['redirect_url'] = window.location.origin+'/community/signup/details/';
    formData['invalid_token_url'] = window.location.origin+'/register/invalid-token';
    formData['coupon'] = "COMMUNITY-SUPPORT"



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
            
            <section className="container">
              <div className="diversity_data register">
                <h1>Become a Mentor</h1>
                <br/>
                <p>Our goal is to <strong><em>train 100,000 individuals and place 20% into direct jobs,</em></strong> which will create wealth for families locked out of employment opportunities.</p>

                <p>You can be part of that journey! Two steps to join the community support;</p>
                <ol>
                  <li>Create an account (or login as an existing user).</li>
                  <li>Submit your details for review (Links to GitHub, Linked, Twitter etc.</li>
                </ol>

                <br/>
                <p>Signup if you're a new user or <Link className='inline-link' to='/login/?next=/community/signup/details/' target="blank">Login here</Link>.</p>
                <br/>

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
                <Link className='inline-link' to="/login/?next=/community/signup/details/" target="blank">Login an existing account</Link>
              </div>
              
            </section>
            </form>
          <Footer />
        </div>
      );
  }
}

export default CommunitySignup;
