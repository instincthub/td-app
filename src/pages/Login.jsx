import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/DiversityForm";
// import { Navbar, Banner, Features } from "./";
import { checkEnv } from "../components/static/assets/js/help_func"; // check environment
import { SubmitButton } from "../components/SubmitButton";
import { fetAPI, spinBtn, handleError } from "../components/static/assets/js/help_func";
import { printErr } from "../components/static/assets/js/help_func";
import { ServerErr } from "../components/ServerErr";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/register.css";
import "../components/static/assets/scss/custom-select.css";
import { Link } from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: 0,
      error: null,
      login_redirect: null
    };
    // Binding this keyword 
    // this.updateState = this.componentDidMount.bind(this)
    this.handleSubmit = this.postData.bind(this)
  }

  componentDidMount(){
    // get access token
    let params = (new URL(document.location)).searchParams;
    this.setState({login_redirect: params.get('login_redirect')}) 
    let u_id = params.get('u_id'); 
    
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
    

    
    // Handle error codes
    if (this.state.items.access) {
        localStorage.setItem('access', this.state.items.access)
        localStorage.setItem('refresh', this.state.items.refresh)
        localStorage.setItem('u_id', this.state.items.u_id)
        localStorage.setItem('username', this.state.items.username)
    }
    
    handleError(this.state.status, items, registerForm, '/register/details')
  }

  // get formData and post data with fetch api
  postData(form){
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    const formData  = new FormData(form);

    console.log(formData)


    // get assessment from db
    const requestOptions = {
        method: 'POST',
        body: formData
    };


    if (checkEnv() === "production") {
      fetAPI(this, "https://api.instincthub.com/auth/login/", requestOptions)
    }
    else if(checkEnv() === "local"){ // Fetch static json in local
      fetAPI(this, "http://127.0.0.1:8000/auth/login/", requestOptions)
    }
    
  }
  
  render(){ 
    return (
      <div>
        <Navbar />

            {/* Server Error State */}
            <div className="mt-10">
            <ServerErr/>
            </div>

            <form 
            id='regForm'
            onSubmit={(e)=>{
                e.preventDefault();
                this.postData(e.target)
                }}>
                <section className="container">
                    <div className="diversity_data register">
                    <h2>Signup for Tech Diversity</h2>

                    <div className="personal_data">
                        <div className="input_parent">
                        <input type="text" placeholder="Username*" name="username" id="id_username" autoFocus required/>
                        <label htmlFor="id_username">Username*</label>
                        </div>
                        
                        <div className="input_parent">
                        <input type="password" placeholder="Password *" name="password" id="id_password" required/>
                        <label htmlFor="id_password">Password *</label>
                        </div>
                    </div>
                    <SubmitButton type="submit" label="Get Access"/>
                    <br/>
                    <Link to="/register/">Create Account</Link>
                    
                    &nbsp;&nbsp; or &nbsp;&nbsp;
                    
                    <a href="https://skills.instincthub.com/accounts/password_reset/" target="_blank">Reset password</a>
                    </div>
                
                </section>
            </form>
        <Footer />
      </div>
    );
  }
}

export default Login;
