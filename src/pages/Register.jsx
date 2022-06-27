import React from 'react';
import { DatePick } from "../components/DatePick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { checkEnv } from "../components/static/assets/js/help_func"; // check environment
import { fetAPI, spinBtn } from "../components/static/assets/js/help_func";
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
      window.location.href = '/register/check-email'
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

    formData['redirect_url'] = window.location.host;


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
      const data = fetAPI(this, "http://127.0.0.1:8000/auth/register/", requestOptions)
      console.log('>>>>>>', data)
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
            <div class="diversity_data">
              <h2>Signup for Tech Diversity</h2>

              <div class="personal_data">
                <div class="input_parent">
                  <input type="text" placeholder="Username *" name="username" id="id_username" autoFocus required/>
                  <label for="id_username">Username *</label>
                </div>
                <div class="input_parent">
                  <input type="text" placeholder="Full Name *" name="first_name" id="id_first_name" required value="noaholatoye101@gmail.com"/>
                  <label for="id_first_name">First Name *</label>
                </div>
                <div class="input_parent">
                  <input type="text" placeholder="Last Name *" name="last_name" id="id_last_name" required value="noaholatoye101@gmail.com"/>
                  <label for="id_last_name">Last Name *</label>
                </div>
                <div class="input_parent">
                  <input type="email" placeholder="Email *" id="id_email" maxlength="254" name="email" required/>
                  <label for="id_email"> Email *</label>
                </div>
                <div class="input_parent">
                  <input type="password" placeholder="Password *" name="password" id="id_password"  />
                  <label for="id_password">Password *</label>
                </div>
                <div class="input_parent">
                  <input type="password" placeholder="Confirm Password *" name="password2" id="id_password2"  />
                  <label for="id_password2">Confirm Password *</label>
                </div>
                <div class="input_parent">
                  <input type="tel" placeholder="WhatsApp Number *" name="phone" id="id_phone" required value="07064"/>
                  <label for="id_phone">WhatsApp Number *</label>
                </div>
                <DatePick 
                  placeholder="Date of Birth*" 
                  labelText="Date of Birth*" 
                  id='id_date_of_birth' 
                  name='id_date_of_birth' 
                  required={true}
                  value="2022-01-01"
                />
              </div>
              <button type="submit" class="important-btn submit_bt">
              <svg class="bt-spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"/></svg>
              Submit Form
            </button>
            </div>
            
          </section>
          </form>
        <Footer />
      </div>
    );
  }
}

export default Register;
