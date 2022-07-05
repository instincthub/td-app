import {React, useEffect} from "react";
// import { DatePick } from "./DatePick";
import BannerImg from "./static/assets/images/diversity_bg.jpg";
import { autocomplete } from "./static/assets/js/autocomplete";
import { customData } from "./static/assets/js/help_func";
import { MediaLinks } from "./MediaLinks";
import { SubmitButton } from "./SubmitButton";
import { FileInputField } from "./FileInputField";
import { ServerErr } from "./ServerErr";

const Form = ({formEvent, ...props}) => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => { // auto complete
    if (document.getElementById('id_school')) {
      autocomplete(document.getElementById('id_school'), customData['universities'])
      autocomplete(document.getElementById('id_course'), customData['courses'])
      autocomplete(document.getElementById('id_faculty'), customData['faculties'])
    }
    
  });

  return (
    <>
      <div className="img_4_banner container">
        <img src={BannerImg} alt="tech diversity banner" />
      </div>
      <div className="container">
        <div className="diversity_assessment">
          <h4>Tech Diversity Assessment</h4>

          <p>
          Thank you for being so interested in our tech diversity program! This application will take roughly 10 minutes and help us assess your suitability for the program. 
          </p>

          <p>
          Please try and be as descriptive as possible and ensure all links can be accessed by a representative from InstinctHub using an @instincthub.com domain.
          </p>
          <p>Kindly follow all the social media handles below. While we encourage you to follow these pages for continuous updates, it is not part of the prerequisite:</p>

          <MediaLinks addClass="ml-0"/>

          <h5 id="Duration"> Duration (12 weeks): 1st Aug - 31st Oct 2022 </h5>
          <p> P.S. The 3 month training is Free for shortlisted individuals.</p>
        </div>
      </div>

      <form 
        encType="multipart/form-data"
        action="" 
        id='regForm'
        onSubmit={(e)=>{
            e.preventDefault();
            formEvent.postData(e.target)
          }
        }
            >

        {/* Server Error State */}
        <div className=''>
            <ServerErr/>
        </div>
        
        <section className="container">
          <div className="diversity_data educational_bg">
            <h2>Educational background</h2>
            {/* <!-- University Name --> */}
            <h5>University Name*</h5>
            <div className="personal_data inputData">
              <div className="input_parent">
                <input
                  id="id_school"
                  type="text"
                  name="school"
                  placeholder="University Name"
                  maxLength="250"
                />
                <label htmlFor="id_school">University Name</label>
              </div>
              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_course"
                  name="course"
                  placeholder="Course of study *" 
                  maxLength="250"/>
                <label htmlFor="id_course">Course of study *</label>
              </div>
              <div className="input_parent">
                <input 
                  type="text" 
                  id="id_faculty"
                  name="faculty"
                  placeholder="Faculty *" 
                  maxLength="250"
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
                      name="level" id="id_level" data-value="10" />
                    <span>100</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" data-value="10" />
                    <span>200</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" data-value="10" />
                    <span>300</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" data-value="10" />
                    <span>400</span>
                  </label>
                </div>
                <div className="radio_parent">
                  <label className="radio">
                    <input type="radio" name="level" data-value="10" />
                    <span>500</span>
                  </label>
                </div>
              </div>

              <div className="input_parent">
                <input 
                  type="text" 
                  name="entry_year" 
                  placeholder="Year of entry (eg. 2019) *" />
                <label htmlFor="id_entry_year">Year of entry (eg. 2019) *</label>
              </div>

              <div className="input_parent">
                <input
                  type="text"
                  name="finished_year"
                  id="id_finished_year"
                  placeholder="Expected Year of Graduation (eg. 2023) *"
                />
                <label htmlFor="id_finished_year">Expected Year of Graduation (eg. 2023) *</label>
              </div>
            </div>
            

            <h4>Learning Commitment</h4>
            <h5>
              How many hours can you dedicate to learning the skills each week?
              *
            </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio" htmlFor="id_commitment_hours_1">
                  <input 
                    type="radio" 
                    name="commitment_hours" 
                    id="id_commitment_hours_1"
                    data-value="4" />
                  <span>4 hours</span>
                </label>
              </div>

              <div className="radio_parent">
                <label className="radio" htmlFor="id_commitment_hours_2">
                  <input 
                    type="radio" 
                    name="commitment_hours" 
                    id="id_commitment_hours_2"
                    data-value="8" />
                  <span>8 hours</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio" htmlFor="id_commitment_hours_4">
                  <input 
                    type="radio" 
                    name="commitment_hours" 
                    id="id_commitment_hours_4"
                    data-value="12" />
                  <span>12 hours</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio" htmlFor="id_commitment_hours_5">
                  <input 
                    type="radio" 
                    name="commitment_hours" 
                    id="id_commitment_hours_5"
                    data-value="<8" />
                  <span>Less than 8 hours</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio" htmlFor="id_commitment_hours_6">
                  <input 
                    type="radio" 
                    name="commitment_hours" 
                    id="id_commitment_hours_6"
                    data-value="<12" />
                  <span>More than 12 hours</span>
                </label>
              </div>
            </div>

            <h5 className="top_form">Do you have a laptop? *</h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="have_laptop" data-value="false" />
                  <span>No</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="have_laptop" data-value="true" />
                  <span>Yes</span>
                </label>
              </div>
            </div>

            {/* <!-- Which network connection is strong in your location? * --> */}
            <h5 className="top_form">
              Which network connection is strong in your location? *
            </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="network" data-value="MTN" />
                  <span>MTN</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="network" data-value="Glo" />
                  <span>Glo</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="network" data-value="9Mobile" />
                  <span>9Mobile</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="network" data-value="Airtel" />
                  <span>Airtel</span>
                </label>
              </div>
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="network" data-value="others" />
                  <span>Others</span>
                </label>
              </div>
            </div>

            <h5 className="top_form">
              On a scale of 1 - 10 (one being being not really important and ten
              being the most important - how important is this skill for you)?
            </h5>
            <div className="input_parent">
              <input 
                type="number" 
                name="knowledge_scale" 
                id="id_knowledge_scale"
                placeholder="1 - 10 *" />
              <label htmlFor="id_knowledge_scale">1 - 10 *</label>
            </div>

            {/* <!-- Upload File --> */}
            <h5 className="top_form">Upload your school ID *</h5>
            <div className="upload_img">
              {/* <label htmlFor="upload_img">
                Upload image
                <input type="file" name="school_id" id="id_school_id" />
              </label> */}
              <FileInputField name='school_id'/>
              {/* <input type="file" name="school_id" class="file-chooser" id="id_school_id_0"></input> */}
            </div>

            {/* <!--Promotional emails * --> */}
            <h5>
              Authorise that InstinctHub can process your data and send you
              promotional emails *
            </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="promotion_email" id="" data-value="false" />
                  <span>No</span>
                </label>
              </div>

              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="promotion_email" id="" data-value="false" />
                  <span>Yes</span>
                </label>
              </div>
            </div>
            {/* <!--Sponsor emails * --> */}
            <h5>
              Authorise that InstinctHub can share name, email and phone numbers
              with sponsors. *
            </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="share_data" id="" data-value="false" />
                  <span>No</span>
                </label>
              </div>

              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="share_data" id="" data-value="true" />
                  <span>Yes</span>
                </label>
              </div>
            </div>
          </div>
          {/* <!--==============
        SUBMISSION BUTTON
      ================== --> */}
          <SubmitButton text="Submit Detail"/>
        </section>
      </form>
    </>
  );
};

export default Form;
