import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/DiversityForm";

import { checkEnv } from "../components/static/assets/js/help_func"; // check environment
import { fetAPI, spinBtn, handleError, getCookie } from "../components/static/assets/js/help_func";
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
      error: null,
      token: localStorage.getItem('access')
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
    if (u_id && token) {
        localStorage.setItem('access', token);
        localStorage.setItem('u_id', u_id);
    }
    else if (this.state.token === null) { // if not token, direct user to register
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
    
    // Handle error 400, null and else redirect to /quiz if success 
    handleError(status, items, registerForm, '/quiz')
  }

  // get formData and post data with fetch api
  postData(form){
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    const formData  = new FormData(form);
    // const new_obj = {}

    // Grab form data 
    form.querySelectorAll("input").forEach((node)=> {
      if (node.getAttribute('type') === 'radio') {
        if (node.checked  === true) { // if input is checked
          if (Number(node.dataset.value)) { // if number
            formData.append(node.name, Number(node.dataset.value))
          }
          else if (node.dataset.value === "true") {
            formData.append(node.name, true)
          }
          else if (node.dataset.value === 'false') {
            formData.append(node.name, false)
          }
          else{
            formData.append(node.name, node.dataset.value)
          }
        }
      }
      
      
    });
    formData.append("user",localStorage.getItem('u_id'))

    console.log(localStorage.getItem('u_id'))
    console.log(localStorage.getItem('access'))
    
    const requestOptions = {
      method: 'POST',
      'X-CSRFToken': getCookie('CSRF-TOKEN'),
      'headers': {
        "Authorization": "Token " + localStorage.getItem('access')
      },
      body: formData
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
