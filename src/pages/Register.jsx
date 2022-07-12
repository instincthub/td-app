import React from 'react';
import { DatePick } from "../components/DatePick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { checkEnv, fetAPI, spinBtn, handleError, getCookie, cookiesEnabled, cookiesRequired } from "../components/static/assets/js/help_func";
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


    if (checkEnv() === "production") {
      fetAPI(this, "https://api.instincthub.com/auth/register/", requestOptions, false)
    }
    else if(checkEnv() === "local"){ // Fetch static json in local
      // this.setState({
      //   items: TestimonialJSON
      // })
      fetAPI(this, "http://127.0.0.1:8000/auth/register/", requestOptions, false)
    }
    
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
                <SubmitButton/>
                <br></br>
                <Link to="/login/">Login an existing account</Link>
              </div>
              
            </section>
            </form>
          <Footer />
        </div>
      );
  }
}

export default Register;
