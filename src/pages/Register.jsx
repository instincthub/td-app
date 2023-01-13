import {React, useState, useEffect} from 'react';
import { DatePick } from "../components/DatePick";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiversityForm2 from '../components/DiversityForm2';
import { fetAPI, spinBtn, handleError, getCookie, cookiesEnabled, cookiesRequired, HOST_URL, printErrNew, inputTagErrorEvent } from "../components/static/assets/js/help_func";
import {SubmitButton} from '../components/SubmitButton';
import { ServerErr } from '../components/ServerErr';
import { Link } from 'react-router-dom';
import { autocomplete } from '../components/static/assets/js/autocomplete';
import { customData } from '../components/static/assets/js/help_func';
// import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import "../components/static/assets/scss/register.css";
import "../components/static/assets/scss/custom-select.css";

import TextField from '../components/forms/TextField'
import RadioField from '../components/forms/RadioField';
import { FileInputField } from '../components/FileInputField';
import { MediaLinks } from '../components/MediaLinks';

const Register = () =>{
  const [items, setItems] = useState()
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)
  const [cohort, setCohort] = useState(null)
  const [student, setStudent] = useState(null)
  // const [updated, setUpdated] = useState(null)
  const [courseChoice, setCourseChoice] = useState([])
  const [access, setAccess] = useState(null)
  // const {slug} = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const influencerSlug = searchParams.get("inf")
  let err_tags = [];

  
  useState(()=>{
    let request_options = {
      method: 'GET',
      headers: {
        'X-CSRFToken': getCookie('CSRF-TOKEN'),
        'Origin': window.location.origin
      },
    };
    
    fetAPI(setCourseChoice, HOST_URL()+"/api/v1/assessment/course_choice/", request_options, true)
    fetAPI(setCohort, HOST_URL()+"/api/v1/assessment/cohort/", request_options, true)
    fetAPI(setStudent, HOST_URL()+"/api/v1/auth/tdn_register/details/get/"+getCookie('u_id'), request_options, true)
  })

  useEffect(()=>{

    // Autocomplete objects
    if (document.getElementById('id_school')) {
      autocomplete(document.getElementById('id_school'), customData['universities'])
      autocomplete(document.getElementById('id_course'), customData['courses'])
      autocomplete(document.getElementById('id_faculty'), customData['faculties'])
    }

    if (cohort && document.querySelector('#regForm')) {
      const registerForm = document.querySelector('#regForm')
      const inputParent = registerForm.querySelectorAll('.input_parent')
      inputParent.forEach(e=>{
        
        if (e.querySelector('.error')) {
          e.querySelector('input').style.borderColor = "#d0d0d0";
          e.querySelector('.error').textContent = "";
        }
      })
    }

    // Handle error 400, null and else redirect to /quiz if success 
    // '/register/verify'
    

    if(student && student.id && !access){
      setAccess(true)

      // Prefill inputs from database
      for (const key in student) {
        if (student.hasOwnProperty(key)) {
            // console.log(`${key}: ${student[key]}`);
            let tags = document.querySelectorAll(`input[name="${key}"]`);

              for (let index = 0; index < tags.length; index++) {
                const element = tags[index];
                if (element.getAttribute('type') === "radio") {
                  if (element.value === student[key]) {
                    element.checked = true;
                  }
                  else if(element.value === student[key] || `${element.value}` === `${student[key]}`){
                    element.checked =  true
                  }
                }
                else if (element.getAttribute('type') === "file") {
                  element.file = student[key];
                  document.querySelector('#id_valid_id').file = student[key];
                }
                else{
                  element.value = student[key];
                  element.parentElement.classList.add('value')
                } 
            }
        }
    }
    }
    else setAccess(null)

  },[status, cohort, student])

  
  const removeErrMsg = ()=>{
    // REMOVE ERROR MESSAGES 
    console.log("TESTING");
    const ERR = document.querySelectorAll('.s_err')
      if (ERR) {
        ERR.forEach((option)=>{ // Remove message
          option.querySelector('.field').style.border = 'none';
          if (option.querySelector('.field .err_msg')) option.querySelector('.field .err_msg').remove();
          option.classList.remove('s_err');
        })
    }

    const ERR_BANNER = document.querySelector('#err_message');
    if (ERR_BANNER) {
      ERR_BANNER.classList.remove('active')
      ERR_BANNER.querySelector('ul').innerHTML = '';
    }
  }


  // PRINT INPUT ERRORS 
    if(status===400){
      removeErrMsg()
      printErrNew(items) // Add message
      spinBtn(document.querySelector('form#regForm'), 'none', false)
    }

  if (items && items.assessment !== 'null' && status!==400)  {
    if (items.message === 'updated')  window.location.href ='/quiz/?slug='+items.assessment
    else window.location.href ='/register/verify';

  };

  // console.log(document.querySelector('input[name="have_laptop"]').value);
  // console.log(`${student.have_laptop}`);

  
  const hideFields = (e, lists) =>{

    const fields =(d_type)=>{
      lists.map((option)=>{
        document.querySelector('.'+option).style.display = d_type
      })
    }
    if(e.getAttribute('type') && e.value.toLowerCase() === 'true') fields('block');
    else if (e.getAttribute('type') && e.value.toLowerCase() === 'false') fields('none')
    
  }
  

  const postData = (form) =>{
    spinBtn(form, 'inline-block', true) // spin button: parameter >> form, display and status

    // Grab form data 
    let formData = new FormData(form); 

    formData.set('user', Number(getCookie('u_id')))
    formData.set('redirect_url', window.location.origin+'/quiz/?slug=')
    formData.set('invalid_token_url', window.location.origin+'/register/invalid-token')
    formData.set('coupon', "TECH3")

    const requestOptions = {
      method: access ? 'PUT' : 'POST',
      headers: {
        "Authorization": "Token " + getCookie('access'),
        'X-CSRFToken': getCookie('CSRF-TOKEN'),
        'Origin': window.location.origin
      },
      body: formData
    };

    let access_url = access ? `${HOST_URL()}/api/v1/auth/tdn_register/details/put/${getCookie('u_id')}/` : HOST_URL()+"/api/v1/auth/tdn_register/"
    fetAPI(setItems, access_url, requestOptions, true, setStatus)
  }

    return (
      <div>
        <Navbar />
        {
          cohort && cohort.count !== 0?
          <form 
            id='regForm'
            onSubmit={(e)=>{
              e.preventDefault();
              postData(e.target)
              }}
            onInvalid={(e)=> inputTagErrorEvent(e.target.name)}>

              {/* Server Error State */}
              <div className='mt-10'>
                <ServerErr/>
              </div>


              <div className="container">
                <div className="diversity_assessment">
                  <h1>Tech Diversity Assessment</h1>

                  <p>Read the instruction before you apply! </p>

                  <p>With your dedication, we believe this programme will transform your life in 12 weeks! <strong> We are giving you a value worth over N250k ($500) for free. </strong>The only way you can show appreciation is to become successful with it. </p>

                  <p> This application will take roughly 30 minutes (plus the assessment). Immediately after the test, you will know whether you meet expectations.</p>

                  <p>No need to panic, the assessment for beginner cohorts doesn't have any technical questions; we only want to know whether you can read and write. </p>

                  <p>Please try and be as descriptive as possible and ensure all links can be accessed by a representative from InstinctHub using an <strong>@instincthub.com</strong> domain.</p>

                  <p>Kindly follow all the social media handles below. While we encourage you to follow these pages for continuous updates, it is not part of the prerequisite:</p>

                  <MediaLinks addClass="ml-0"/>

                </div>
              </div>
            
            <section className="container">
              
              <div className="diversity_data register">
                {
                  access === null
                  ?
                  <div className='mb-5'>
                    <Link className='inline-link' to="/login/?next=/register">Login to an existing account</Link>
                  </div>
                  :
                  ''
                }
                <RadioField options={cohort ? cohort.results : []}
                  names="cohort"
                  labels="Choose a cohort:"
                  requireds={true}
                />

                <br/><br/>
                
              <RadioField options={courseChoice ? courseChoice.results: []}
                names="course_choice"
                labels="Your preferred stack:"
                requireds={true}
              />
              {/* Registration Form */}
              {
                
                !access
                ?
                  <>
                  <br/><br/>
                  <h2>Account</h2>
                  
                  <TextField types="text" name="username" label="Username *" required={true}/>
                  <TextField types="email" name="email" label="Email *" required={true}/>
                  <TextField types="text" name="first_name" label="First Name *" required={true}/>
                  <TextField types="text" name="last_name" label="Last Name *" required={true}/>
                  <TextField types="password" name="password" label="Password *" required={true}/>
                  <TextField types="password" name="password2" label="Confirm Password *" required={true}/>
                  <TextField types="tel" name="phone" label="WhatsApp Number *" required={true}/>

                  <DatePick 
                      placeholder="Date of Birth*" 
                      labelText="Date of Birth*" 
                      addClass="width-48"
                      id='id_date_of_birth' 
                      name='date_of_birth' 
                      required={true}
                    />
                  </>
                :
                ''
              }
                

          <div className="diversity_data educational_bg">
            <h2>Educational background</h2>

            <div onClick={(e)=>hideFields(e.target, ['in_schools'])} >
              <RadioField options={[
                {title: 'Yes', id: 'true'},
                {title: 'No', id: 'false'}
              ]}
                names="in_school"
                labels="Currently in school *"
                requireds={true}
              />
            </div>
            <div className='in_schools'> {/* <!-- In Schools --> */}
            
              {/* <!-- University Name --> */}
              <h5>University Name*</h5>

              <TextField types="text" name="school" label="University Name" ids="id_school" maxLengths="250"/>
              <TextField types="text" name="course" label="Course of study" ids="id_course" maxLengths="250"/>
              <TextField types="text" name="faculty" label="Faculty" ids="id_faculty" maxLengths="250"/>

              <RadioField options={[
                {title: '100', id: 100},
                {title: '200', id: 200},
                {title: '300', id: 300},
                {title: '400', id: 400},
                {title: '500', id: 500},
              ]}
                names="level"
                labels="Current Level *"
              />
              
              <h5 className="top_form">Year of entry</h5>
              <TextField types="text" name="entry_year" label="eg. 2019" widths="auto"/>

              <h5 className="top_form">Expected Year of Graduation</h5>
              <TextField types="text" name="finished_year" label="eg. 2023" widths="auto"/>

            </div>{/* <!-- End In Schools --> */}
            
          </div>

          <div className="diversity_data educational_bg">
            <h2>Learning Commitment</h2>

            <RadioField options={[
                {title: 'Yes', id: 'true'},
                {title: 'No', id: 'false'}
              ]}
                names="employed"
                labels="Currently Employed *"
                requireds={true}
              />

            <RadioField options={[
                {title: 'Yes', id: 'true'},
                {title: 'No', id: 'false'}
              ]}
                names="job_search"
                labels="Looking for job? *"
                requireds={true}
              />

              <TextField types="text" name="expected_income" label="Income Expectation (eg. N10,000)" maxLengths="250" />

            <RadioField options={[
              {title: '4 hours', id: '4'},
              {title: '8 hours', id: '8'},
              {title: '12 hours', id: '12'},
              {title: '12 hours +', id: '12>'}
            ]}
              names="commitment_hours"
              labels="How many hours can you dedicate to learning the skills each week?
              * *"
              requireds={true}
            />

            <RadioField options={[
              {title: 'Yes', id: true},
              {title: 'No', id: false}
            ]}
              names="have_laptop"
              labels="Do you have a laptop? *"
              requireds={true}
            />

            <RadioField options={[
              {title: 'MTN', id: 'MTN'},
              {title: 'GLO', id: 'GLO'},
              {title: '9MOBILE', id: '9MOBILE'},
              {title: 'AIRTEL', id: 'AIRTEL'},
              {title: 'OTHERS', id: 'OTHERS'},
            ]}
              names="network"
              labels="Which network connection is strong in your location? *"
              requireds={true}
            />

            <h5 className="top_form">
              On a scale of 1 - 10 (one being being not really important and ten
              being the most important - how important is this skill for you)?
            </h5>
            <TextField types="number" name="knowledge_scale" label="1 - 10 *" maxLengths="250" widths="auto" requireds={true}/>

            

            {/* <!-- Upload File --> */}
            <div className="upload_img">
              <FileInputField name='valid_id' requireds={true} titles={'Upload valid ID (NIN, Drivers License, Passport etc. *'}/>
            </div>

            <RadioField options={[
              {title: 'instinctHub APP', id: "INSTINCTHUB APP"},
              {title: 'From WhatsApp', id: 'WHATSAPP'},
              {title: 'From a Google Search', id: 'GOOGLE'},
              {title: 'From a Blog Post', id: 'BLOG'},
              {title: 'From Facebook', id: 'FACEBOOK'},
              {title: 'From Twitter', id: 'TWITTER'},
              {title: 'From LinkedIn', id: 'LINKEDIN'},
              {title: 'From a Friend', id: 'FRIENDS'},
              {title: 'Via a Webinar', id: 'WEBINAR'},
              {title: 'In the News', id: 'NEWS'},
              {title: 'Others', id: 'OTHERS'},
            ]}
              names="where"
              labels="How did you hear about the training?"
              requireds={true}
            />


            {/* <!--Promotional emails * --> */}
            <RadioField options={[
              {title: 'Yes', id: true},
              {title: 'No', id: false}
            ]}
              names="promotion_email"
              labels="Authorise that InstinctHub can process your data and send you
              promotional emails *"
              requireds={true}
            />
            
            {/* <!--Sponsor emails * --> */}
            <RadioField options={[
              {title: 'Yes', id: true},
              {title: 'No', id: false}
            ]}
              names="share_data"
              labels="Authorise that InstinctHub can share name, email and phone numbers
              with sponsors. *"
              requireds={true}
            />

            <input type="text" hidden name='influencer' id='id_influencer' defaultValue={influencerSlug ? influencerSlug : ''}/>
            <input type="text" hidden name='assessment' id='id_assessment' defaultValue='mull'/>
            <input type="text" hidden name='user' id='id_assessment' defaultValue={student ? student.id : ''}/>
            
          
            <aside id='err_message' className="container server_err mb-1">
              <h3>Check these fields</h3>
              <ul>

              </ul>
            </aside>
            
          </div>


                {/* <DiversityForm2/> */}

                <SubmitButton label="Signup"/>

              </div>

              
              
            </section>
            </form>
            :
            <div className='container'>
              <div className='reg_closed'>
                  <br/>
                  <br/>
                  <h3>Registration has been closed.</h3>
                  <p>Registration for this programme has been closed as we are currently in session.</p>
                  <p>We appreciate your interest!</p>
                  <br/>
                  <br/>
              </div>
            </div>
          }
        <Footer />
      </div>
    );
}

export default Register;
