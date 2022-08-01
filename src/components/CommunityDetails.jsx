import {React, useEffect} from "react";
// import { DatePick } from "./DatePick";
import BannerImg from "./static/assets/images/diversity_bg.jpg";
import { autocomplete } from "./static/assets/js/autocomplete";
import { customData, PageHeroBanner } from "./static/assets/js/help_func";
import { MediaLinks } from "./MediaLinks";
import { SubmitButton } from "./SubmitButton";
import { ServerErr } from "./ServerErr";

const CommunityDetails = ({formEvent, ...props}) => {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => { // auto complete
    if (document.getElementById('id_country')) {
      autocomplete(document.getElementById('id_country'), customData['country_list'])
    }
    PageHeroBanner('PageHeroBannerTag', BannerImg)
  });

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

          <h2>Provide More Details</h2>

            {/* completed_course */}
            <h5> Have you completed any of our courses in the past? * </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="completed_our_course" value={false} />
                  <span>No</span>
                </label>
              </div>

              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="completed_our_course" value={true} />
                  <span>Yes</span>
                </label>
              </div>
            </div>

            <div className="personal_data">

              {/* Stack */}
              <h5>What is your core stack?*</h5>
              <div class="select">
                <select  name="stack" id="selectStack">
                  <option value=""> Please select </option>
                  <option value="Frontend Dev"> Frontend Dev </option>
                  <option value="Backend"> Backend Dev </option>
                  <option value="DevOps"> DevOps </option>
                  <option value="Mobile Dev">  Mobile Dev </option>
                  <option value="UI/UX"> UI/UX </option>
                  <option value="Graphics"> Graphics </option>
                  <option value="Videography"> Videography </option>
                  <option value="Animation"> Animation </option>
                  <option value="None"> None </option>
                </select>
              </div>
              <br/>

              <div className="input_parent">
                <input
                  id="id_years_of_experience"
                  type="number"
                  name="years_of_experience"
                  placeholder="Years of Experience (eg. 4) *"
                />
                <label htmlFor="id_years_of_experience">Years of Experience (eg. 4) *</label>
              </div>
            </div>
            
            {/* currently_employed */}
            <h5> Are you currently employed? * </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="currently_employed" value={false} />
                  <span>No</span>
                </label>
              </div>

              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="currently_employed" value={true} />
                  <span>Yes</span>
                </label>
              </div>
            </div>
            
            {/* employer_name */}
            <div className="personal_data inputData">
              <div className="input_parent">
                  <input
                    id="id_employer_name"
                    type="text"
                    name="employer_name"
                    placeholder="Employer's Name (Company)"
                    maxLength="250"
                  />
                  <label htmlFor="id_employer_name">Employer's Name (Company)</label>
                </div>
            </div>

            {/* employment_type */}
            <h5>Employment Type *</h5>
            <div class="select">
              <select  name="employment_type" id="selectJobType">
                <option option value=""> Please select </option>
                <option value="Full-time"> Full-time </option>
                <option value="Part-time"> Part-time </option>
                <option value="Self-employed"> Self-employed </option>
                <option value="Freelance">  Freelance </option>
                <option value="Contract"> Contract </option>
                <option value="Internship"> Internship </option>
                <option value="Apprenticeship"> Apprenticeship </option>
                <option value="Seasonal"> Seasonal </option>
                <option value="None"> None </option>
            </select>
          </div>

          {/* currently_employed */}
            <h5> Are you looking for new job? * </h5>
            <div className="personal_data">
              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="looking_for_job" value={false} />
                  <span>No</span>
                </label>
              </div>

              <div className="radio_parent">
                <label className="radio">
                  <input type="radio" name="looking_for_job" value={true} />
                  <span>Yes</span>
                </label>
              </div>
            </div>
            
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

              <div className="input_parent">
                <input 
                  id="id_twitter_url"
                  type="url" 
                  name="twitter_url"
                  placeholder="https://twitter.com/username *" 
                  maxLength="250"/>
                <label htmlFor="id_twitter_url">Twitter URL*</label>
              </div>

              <div className="input_parent">
                <input
                  id="id_git_url" 
                  type="url" 
                  name="git_url"
                  placeholder="https://github.com/username" 
                  maxLength="250"
                  />
                <label htmlFor="id_git_url">GitHub URL</label>
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
                  id="id_address2"
                  type="text"
                  name="address2"
                  placeholder="Address Line 2"
                  maxLength="250"
                />
                <label htmlFor="id_address2">Address Line 2</label>
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
};

export default CommunityDetails;
