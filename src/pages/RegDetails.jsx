import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/DiversityForm";
// import { Navbar, Banner, Features } from "./";
import { checkEnv } from "../components/static/assets/js/help_func"; // check environment
import { fetAPI, spinBtn } from "../components/static/assets/js/help_func";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/register.css";
import "../components/static/assets/scss/custom-select.css";

class RegDetails extends React.Component {

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

  componentDidMount(){
    // get access token
    let params = (new URL(document.location)).searchParams;
    let token = params.get('access'); // is the string "token".
    let u_id = params.get('u_id'); 
    // let age = parseInt(params.get('age')); // is the number 18
    if (token && u_id) {
        localStorage.setItem('access', token);
        localStorage.setItem('u_id', u_id);
    }
    else{ // if not token, direct user to register
      document.querySelector('.form_content').innerHTML = `
      <div class="container mt-10 mb-10">
        <span>To input details, you need to either login of create an account.</span>
        <a href="/register">
          <button class="d-inline-block important-btn">
            <span>Create Account</span>
          </button>
        </a>
      </div>`
    }


  }
  componentDidUpdate(){
    const {items, status} = this.state
    const registerForm = document.querySelector('#regForm')

    registerForm.querySelectorAll('input').forEach(e=>{
      e.style.borderColor = "#d0d0d0";
    })

    if (registerForm.querySelectorAll('.error')) {
      registerForm.querySelectorAll('.error').forEach(e=>{
        e.textContent = "";
      })
    }
    

    const printErr = (key, value, index) =>{
      let inputField = registerForm.querySelector(`[name="${key}"]`)
      // console.log(key, value)

      let error_tag = null

      // Make input border red and check for the parent tag
      if (inputField !== null) {
        inputField.style.borderColor = 'var(--TurkishRose)';

        if (inputField.getAttribute('type') === 'radio'){
            error_tag = inputField.parentElement.parentElement.parentElement.querySelector('.error');
        }
        else if (inputField.getAttribute('type') === 'file'){
          error_tag = inputField.parentElement.parentElement.querySelector('.error'); 
        }
        else{
          error_tag = inputField.parentElement.querySelector('.error');
        }
      }

      if (error_tag) {
        error_tag.textContent = value
      }
      else{
        let span_tag = document.createElement('SPAN')
        span_tag.classList.add('error')
        span_tag.textContent = value
        span_tag.style.color = 'var(--TurkishRose)'
        span_tag.style.display = 'inline-block'
        
        if (key === "user") {
          
        }
        else if (inputField !== null){
          // console.log(inputField.parentElement)
          if (inputField.getAttribute('type') == "radio") {
            // console.log(key)
            inputField.parentElement.parentElement.parentElement.append(span_tag)
          }
          else if (inputField.getAttribute('type') == "file") {
            // console.log(key)
            inputField.parentElement.parentElement.append(span_tag)
          }
          else{
            inputField.parentElement.append(span_tag)
          }
        }
        
      }
      if (index === 0 && inputField !== null) {
        inputField.focused = true
      }
      
    }

    if (status === 400){
      spinBtn(registerForm, 'none', false) // spin button: parameter >> form, display and status
      document.querySelector('button').disabled = false;
      Object.entries(items).forEach((item, index)=> {
        const [key, value] = item;
        // console.log(key, value)
        printErr(key, value, index)
      });
    }
    else{
      window.location.href = '/register/verify'
    }
  }

  postData(form){
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    const formData2  = new FormData(form);
    const new_obj = {}

    for (const [key, value] of formData2) {
      console.log(`${key}: ${value}\n`);
      new_obj[key] = value
    }
    console.log('....formData2: ', new_obj)

    // Grab form data 
    let formData = {}; 
    form.querySelectorAll("input").forEach((node)=> {
      if (node.getAttribute('type') === 'radio') {
        if (node.checked  === true) { // if input is checked
          if (Number(node.dataset.value)) { // if number
            formData[node.name] = Number(node.dataset.value)
          }
          else if (node.dataset.value === "true") {
            formData[node.name] = true
          }
          else if (node.dataset.value === 'false') {
            formData[node.name] = false
          }
          else{
            formData[node.name] = node.dataset.value
          }
        }
      }
      else{
        formData[node.name] = node.value;
      }
      
      
    });
    formData['user'] = localStorage.getItem('u_id')

    // formData['redirect_url'] = window.location.origin+'/register/details';
    // formData['invalid_token_url'] = window.location.origin+'/register/invalid-token';


    console.log(formData2)

    const requestOptions = {
      method: 'POST',
      body: formData2
    };


    if (checkEnv() === "production") {
      fetAPI(this, "https://api.instincthub.com/auth/register/tech-diversity/detail/", requestOptions)
    }
    else if(checkEnv() === "local"){ // Fetch static json in local
      fetAPI(this, "http://127.0.0.1:8000/auth/register/tech-diversity/detail/", requestOptions)
    }
    
  }
  
  render(){ 
    return (
      <div>
        <Navbar />
        <div className="form_content">
          <Form formEvent={this}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RegDetails;
