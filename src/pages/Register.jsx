import React from 'react';
import { DatePick } from "../components/DatePick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { checkEnv } from "../components/static/assets/js/help_func"; // check environment
import { fetAPI, spinBtn } from "../components/static/assets/js/help_func";
import {SubmitButton} from '../components/SubmitButton'
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
      error: null
    };
    // Binding this keyword 
    // this.updateState = this.componentDidMount.bind(this)
    this.handleSubmit = this.postData.bind(this)
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

    const printErr = (key, value, index) =>{
      let inputField = registerForm.querySelector(`[name="${key}"]`)
      inputField.style.borderColor = 'var(--TurkishRose)'
      let error_tag = inputField.parentElement.querySelector('.error')
      if (error_tag) {
        error_tag.textContent = value
      }
      else{
        let span_tag = document.createElement('SPAN')
        span_tag.classList.add('error')
        span_tag.textContent = value
        span_tag.style.color = 'var(--TurkishRose)'
        inputField.parentElement.append(span_tag)
      }
      if (index === 0) {
        inputField.focused = true
      }
      
    }

    if (status === 400){
      spinBtn(registerForm, 'none', false) // spin button: parameter >> form, display and status
      document.querySelector('button').disabled = false;
      Object.entries(items).forEach((item, index)=> {
        const [key, value] = item;
        printErr(key, value, index)
      });
    }
    else{
      window.location.href = '/register/verify'
    }
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


    console.log(formData)

    const requestOptions = {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    };


    if (checkEnv() === "production") {
      fetAPI(this, "https://api.instincthub.com/auth/register/", requestOptions)
    }
    else if(checkEnv() === "local"){ // Fetch static json in local
      // this.setState({
      //   items: TestimonialJSON
      // })
      fetAPI(this, "http://127.0.0.1:8000/auth/register/", requestOptions)
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
          <section class="container">
            <div class="diversity_data register">
              <h2>Signup for Tech Diversity</h2>

              <div class="personal_data d-flex d-wrap d-between">
                <div class="input_parent width-48">
                  <input type="text" placeholder="Username *" name="username" id="id_username" autoFocus required/>
                  <label htmlFor="id_username">Username *</label>
                </div>
                <div class="input_parent width-48">
                  <input type="email" placeholder="Email *" id="id_email" maxlength="254" name="email" required/>
                  <label htmlFor="id_email"> Email *</label>
                </div>
                <div class="input_parent width-48">
                  <input type="text" placeholder="Full Name *" name="first_name" id="id_first_name" required/>
                  <label htmlFor="id_first_name">First Name *</label>
                </div>
                <div class="input_parent width-48">
                  <input type="text" placeholder="Last Name *" name="last_name" id="id_last_name" required/>
                  <label htmlFor="id_last_name">Last Name *</label>
                </div>
                <div class="input_parent width-48">
                  <input type="password" placeholder="Password *" name="password" id="id_password" required/>
                  <label htmlFor="id_password">Password *</label>
                </div>
                <div class="input_parent width-48">
                  <input type="password" placeholder="Confirm Password *" name="password2" id="id_password2" required />
                  <label htmlFor="id_password2">Confirm Password *</label>
                </div>
                <div class="input_parent width-48">
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
            </div>
            
          </section>
          </form>
        <Footer />
      </div>
    );
  }
}

export default Register;
