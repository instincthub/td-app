import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/DiversityForm";

import { fetAPI, spinBtn, handleError, setCookie, getCookie, cookiesRequired, loginRequired, HOST_URL} from "../components/static/assets/js/help_func";
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
      token: getCookie('access'),
      user_id: getCookie('u_id')
    };
    // Binding this keyword 
    // this.updateState = this.componentDidMount.bind(this)
    this.handleSubmit = this.postData.bind(this)
  }

  componentDidMount(){
    
    cookiesRequired()
    loginRequired(getCookie('access'))// if data status is 401
    
    // get access token
    let params = (new URL(document.location)).searchParams;

    if (params.get('access') !== null && params.get('access') !== '') {
        setCookie('refresh',  params.get('refresh'), 30)
        setCookie('access',  params.get('access'), 30)
        setCookie('u_id', params.get('u_id'), 30)
        setCookie('username', params.get('username'), 30)
        // console.log(params.get('u_id'))

        this.setState({
          token: params.get('access'),
          user_id: params.get('u_id')
      })
    }
    if(getCookie('access') === null || '') { // if not token, direct user to register
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

    // console.log(getCookie('access'))
    
  }
  componentDidUpdate(){
    // console.log(this.state.token)
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
    formData.append("user", this.state.user_id)

    console.log(this.state.token)
    console.log(this.state.user_id)

    const requestOptions = {
      method: 'POST',
      'X-CSRFToken': getCookie('csrftoken'),
      'headers': {
        "Authorization": "Token " + getCookie('access')
      },
      body: formData
    };

    fetAPI(this, HOST_URL()+"/auth/register/tech-diversity/detail/", requestOptions)
    
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
