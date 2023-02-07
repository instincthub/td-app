import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CommunityDetails from "../../components/CommunityDetails";

import { fetchAPI, spinBtn, handleError, setCookie, getCookie, cookiesRequired, HOST_URL, reqOptions} from "../../components/static/assets/js/help_func";
import "../../components/static/assets/scss/staff.css";
import "../../components/static/assets/scss/diversity.css";
import "../../components/static/assets/scss/register.css";
import "../../components/static/assets/scss/custom-select.css";
import { HandleError } from "../../components/forms/HandleError";
import { LoginRequired } from "../../components/forms/LoginRequired";

class CommunitySignupDetails extends React.Component {

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
    cookiesRequired()
    LoginRequired()
    
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
  }

  // get formData and post data with fetch api
  postData(form){
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    const formData  = new FormData(form);
    formData.append("user", this.state.user_id)

    const requestOptions =  reqOptions("POST", formData, true)

    fetchAPI(this, HOST_URL()+"/api/v1/auth/community/signup/details/", requestOptions)
    
  }
  
  
  render(){ 
    const {items, status} = this.state
    return (
      <div>
        <Navbar />
        <div className="form_content">
          <CommunityDetails formEvent={this}/>
        </div>
        <HandleError items={items} status={status} registerForm={document.querySelector('#regForm')} r_path={'/community/signup/details/success'}/>
        <Footer />
      </div>
    );
  }
}

export default CommunitySignupDetails;
