import {React, useEffect} from "react";
// import { DatePick } from "./DatePick";
import BannerImg from "./static/assets/images/diversity_bg.jpg";
import { autocomplete } from "./static/assets/js/autocomplete";
import { customData, PageHeroBanner } from "./static/assets/js/help_func";
import { MediaLinks } from "./MediaLinks";
import { SubmitButton } from "./SubmitButton";
import { OTPInput } from "./OTPInput";
import { OTPEmailInput } from "./OTPEmailInput";

const CampusLeadForm = ({formEvent, ...props}) => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => { // auto complete
    if (props.verified === 'details') {
      if (document.getElementById('id_country')) {
        autocomplete(document.getElementById('id_country'), customData['country_list'])
        autocomplete(document.getElementById('id_school'), customData['universities'])
        autocomplete(document.getElementById('id_course'), customData['courses'])
        autocomplete(document.getElementById('id_faculty'), customData['faculties'])
      }
      PageHeroBanner('PageHeroBannerTag', BannerImg)
    }
  });

  // Checking three conditions;
  // 1. valid email
  // 2. otp validation
  // 3. fill details
  if (props.verified === 'email') {
    return(
      <>
        <OTPEmailInput event={formEvent}/>
      </>
    )
  }
  else if (props.verified === 'otp'){
    return(
      <>
        <OTPInput event={formEvent}/>
      </> 
    ) 
  }
  else if (props.verified === 'details'){
    return (
      <div>
        <div className="img_4_banner container" id="PageHeroBannerTag">
          {/* <img src={BannerImg} alt="tech diversity banner" /> */}
        </div>
        <div className="container">
          <div className="diversity_assessment">
            <h1>Community Support</h1>

            <p>
            Thank you for being so interested in our tech diversity community! This application will take roughly less than 2 minutes and help us assess your suitability for the program. 
            </p>

            <p>
            Please try and be as descriptive as possible and ensure all links can be accessed by a representative from InstinctHub using an @instincthub.com domain.
            </p>
            <p>Kindly follow all the social media handles below. While we encourage you to follow these pages for continuous updates, it is not part of the prerequisite:</p>

            <MediaLinks addClass="ml-0"/>
          </div>
        </div>

        <form 
          encType="multipart/form-data"
          action="" 
          id='regForm'
          onSubmit={(e)=>{
              e.preventDefault();
              let u_email = Array.isArray(formEvent.state.items.email) ? formEvent.state.items.email.join('') : formEvent.state.items.email 
              if (u_email === undefined){
                u_email = formEvent.state.items[0].email
              }
              formEvent.postData(e.target, "PUT", `/auth/campus/details/${u_email}/`)
            }
          }
              >

          
          
          <section className="container">
            <div className="diversity_data educational_bg">

              <h2>Provide Details</h2>

              <div className="personal_data">
                <div className="input_parent">
                  <input
                    id="id_first_name"
                    type="text"
                    name="first_name"
                    placeholder="First Name *"
                    required
                  />
                  <label htmlFor="id_first_name">First Name *</label>
                </div>
                
                <div className="input_parent">
                  <input
                    id="id_last_name"
                    type="text"
                    name="last_name"
                    placeholder="First Name *"
                    required
                  />
                  <label htmlFor="id_last_name">First Name *</label>
                </div>

                <div className="input_parent">
                  <input
                    id="id_phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                  />
                  <label htmlFor="id_phone">Phone Number *</label>
                </div>
              </div>

            <br/>
            <h2>Educational background</h2>

            <h5> Currently in School? * </h5>
              <div className="personal_data">
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="in_school" value={false} />
                    <span>No</span>
                  </label>
                </div>

                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="in_school" value={true} />
                    <span>Yes</span>
                  </label>
                </div>
              </div>
            {/* <!-- University Name --> */}
            <div className="personal_data inputData">
              <div className="input_parent">
                <input
                  id="id_school"
                  type="text"
                  name="school"
                  placeholder="University Name"
                  maxLength="250"
                  required
                />
                <label htmlFor="id_school">University Name</label>
              </div>
              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_course"
                  name="course"
                  placeholder="Course of study *" 
                  maxLength="250"
                  required
                  />
                <label htmlFor="id_course">Course of study *</label>
              </div>
              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_faculty"
                  name="faculty"
                  placeholder="Faculty *" 
                  maxLength="250"
                  required
                  />
                <label htmlFor="id_faculty">Faculty *</label>
              </div>
            </div>

            {/* <!-- cURRENT level --> */}
            <h5>Curent Level*</h5>
            <div className="personal_data">
              <div>
                <div className="radio_parent">
                  <label className="radio">
                    <input 
                      type="radio" 
                      name="level" id="id_level" value="100" />
                    <span>100</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" value="200" />
                    <span>200</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" value="300" />
                    <span>300</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" value="400" />
                    <span>400</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" value="500" />
                    <span>500</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" value="None" />
                    <span>None</span>
                  </label>
                </div>
              </div>

              <div className="input_parent">
                <input 
                  type="number" 
                  name="entry_year" 
                  placeholder="Year of entry (eg. 2019) *" required />
                <label htmlFor="id_entry_year">Year of entry (eg. 2019) *</label>
              </div>

              <div className="input_parent">
                <input
                  type="number"
                  name="finished_year"
                  id="id_finished_year"
                  placeholder="Expected Year of Graduation (eg. 2023) *"
                  required
                />
                <label htmlFor="id_finished_year">Expected Year of Graduation (eg. 2023) *</label>
              </div>
            </div>

            <br/>
            <h2>Contact Details</h2>
              
            {/* <!-- University Name --> */}
            <h5>Social Links*</h5>
            <div className="personal_data inputData">
              <div className="input_parent">
                <input
                  id="id_linkedin_url"
                  type="url"
                  name="linkedin_url"
                  placeholder="https://www.linkedin.com/in/username/ *"
                  maxLength="250"
                />
                <label htmlFor="id_school">LinkedIn URL *</label>
              </div>
            </div>
            
            {/* <!-- Address --> */}
            <h5>Address: *</h5>
            <div className="personal_data inputData">

            <div className="input_parent">
                <input 
                  type="text" 
                  id="id_address"
                  name="address"
                  placeholder="Address Line 1 *" 
                  maxLength="250"/>
                <label htmlFor="id_address">Address Line 1 *</label>
              </div>

              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_city"
                  name="city"
                  placeholder="City *" 
                  maxLength="250"
                  />
                <label htmlFor="id_city">City *</label>
              </div>

              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_state"
                  name="state"
                  placeholder="State *" 
                  maxLength="250"/>
                <label htmlFor="id_state">State *</label>
              </div>

              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_country"
                  name="country"
                  placeholder="Country *" 
                  maxLength="250"
                  />
                <label htmlFor="id_country">Country *</label>
              </div>

              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_zip_code"
                  name="zip_code"
                  placeholder="Zip Code *" 
                  maxLength="250"
                  />
                <label htmlFor="id_zip_code">Zip Code *</label>
              </div>
            </div>

              
            </div>
            {/* <!--==============
          SUBMISSION BUTTON
        ================== --> */}
            <SubmitButton label="Submit Detail"/>
          </section>
        </form>
      </div>
    );
  }
};

export default CampusLeadForm;
