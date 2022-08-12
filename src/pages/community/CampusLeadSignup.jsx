import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CampusLeadForm from "../../components/CampusLeadForm";
import { ServerErr } from "../../components/ServerErr";

import { fetAPI, spinBtn, handleError, setCookie, getCookie, cookiesRequired, HOST_URL} from "../../components/static/assets/js/help_func";
import "../../components/static/assets/scss/staff.css";
import "../../components/static/assets/scss/diversity.css";
import "../../components/static/assets/scss/register.css";
import "../../components/static/assets/scss/custom-select.css";

class CampusLeadSignup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: null,
      error: null,
      token: getCookie('access'),
      user_id: getCookie('u_id'),
      verified: 'email',
      otp: [0,0,0,0,0,0],
      verifyOtp: this.verifyOtp.bind(this)
    };
    // Binding this keyword 
    // this.updateState = this.componentDidMount.bind(this)
    this.handleSubmit = this.postData.bind(this);
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
    if(getCookie('access') === null || '') { // if not token, direct user to register
      cookiesRequired()
    }

    // console.log(getCookie('access'))
    
  }
  componentDidUpdate(){
    // console.log(this.state.token)
    const {items, status, verified} = this.state
    const registerForm = document.querySelector('#regForm')

    if (verified === 'details' || verified === 'email') {
      registerForm.querySelectorAll('input').forEach(e=>{
        e.style.borderColor = "#d0d0d0";
      })

      if (registerForm.querySelectorAll('.error')) {
        registerForm.querySelectorAll('.error').forEach(e=>{
          e.textContent = "";
        })
      }
      if (Number(items.previous_otp) === items.previous_otp && this.state.verified !== 'otp' && this.state.verified !== 'details') {
        this.setState({
          verified: 'otp'
        })
      }
      
      // Handle error 400, null and else redirect to /quiz if success 
      let success_url = (items.message === 'Campus Lead details was added successfully.' ? '/community/signup/details/success' : null)
      handleError(status, items, registerForm, success_url)
    }
  }

  // get formData and post data with fetch api
  postData(form, method, api){
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    const formData  = new FormData(form);

    if (this.state.verified === 'details') {
      let bool_fields = ['completed_our_course', 'currently_employed', 'looking_for_job']

      bool_fields.forEach(e=>{
        if (formData.get(e) === null) {
          formData.append(e, null)
        }
      })
      formData.append('previous_otp', (Number(this.state.otp.join(''))))
      console.log('previous_otp.... ', formData.get('previous_otp'))
    }

    const requestOptions = {
      method: method,
      'X-CSRFToken': getCookie('csrftoken'),
      body: formData
    };

    fetAPI(this, HOST_URL()+api, requestOptions)
    
  }

  verifyOtp(){
    const {items, otp} = this.state
    const errTag = document.querySelector('#otpErr');

    // console.log(otp)
    let otp_join = otp.join('')
    if (otp_join.length === 6) {
      let num_otp = Number(otp_join)
      if (num_otp) {
        if (items.previous_otp === num_otp) {
          this.setState({
            verified: 'details'
          })
        }
        else{
          errTag.style.display = 'block'
          errTag.querySelector('span').textContent = "Incorrect verification code"
        }
      }
    }
    else if (otp_join.length < 6) {
        errTag.style.display = 'block'
        errTag.querySelector('span').textContent = "Incomplete verification code"
    }
  }
  
  
  render(){ 
    return (
      <div>
        <Navbar />
        <div className="form_content">
        {/* Server Error State */}
          <div className=''>
              <ServerErr/>
          </div>
          <CampusLeadForm formEvent={this} verified={this.state.verified}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CampusLeadSignup;
