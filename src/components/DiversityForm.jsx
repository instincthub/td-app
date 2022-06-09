import React from "react";
import { DatePick } from "./DatePick";
import BannerImg from "./static/assets/images/diversity_bg.jpg";
// import { autocomplete } from "./static/assets/js/autocomplete";

const Form = () => {
  return (
    <>
      <div class="img_4_banner container">
        <img src={BannerImg} alt="" />
      </div>
      <div class="container">
        <div class="diversity_assessment">
          <h4>Tech Diversity Assessment</h4>

          <p>
          Thank you for being so interested in our tech diversity program! This application will take roughly 10 minutes and help us assess your suitability for the program. 
          </p>

          <p>
          Please try and be as descriptive as possible and ensure all links can be accessed by a representative from InstinctHub using an @instincthub.com domain.
          </p>
          <p>Kindly follow all the social media handles below. While we encourage you to follow these pages for continuous updates, it is not part of the prerequisite:</p>

          <ul className="social_links">
            <li>
              Facebook - <a href="https://www.facebook.com/instincthub" target="blank">https://www.facebook.com/instincthub </a>
            </li>
            <li>
              Twitter - <a href="https://www.twitter.com/instincthub" target="blank">https://www.twitter.com/instincthub </a>
            </li>
            <li>
              LinkedIn - <a href="https://www.linkedin.com/company/instincthub" target="blank">https://www.linkedin.com/company/instincthub</a>
            </li>
            <li>
              Instagram - <a href="https://www.instagram.com/instincthub_" target="blank">https://www.instagram.com/instincthub_ </a>
            </li>
          </ul>
          <h5> Duration (12 weeks): 1st Aug - 31st Oct 2022 </h5>
          <p> P.S. The 3 month training is Free for shortlisted</p>
        </div>
      </div>

      {/* This is the Form  */}
      <form  action="" autoComplete={'autocomplete'}>
        <section class="container">
          <div class="diversity_data">
            <h2>Personal Bio</h2>

            <div class="personal_data">
              <div class="input_parent">
                <input type="text" placeholder="Full Name *" />
                <label for="Last Name">Full Name *</label>
              </div>
              <div class="input_parent">
                <input type="text" placeholder="Email *" />
                <label for="Last Name"> Email *</label>
              </div>
              <div class="input_parent">
                <input type="text" placeholder="Mobile *" />
                <label for="Last Name">Mobile *</label>
              </div>
              <DatePick placeholder="Date of Birth*" labelText="Date of Birth*"/>
              <div class="input_parent">
                <input type="text" placeholder="Address *" />
                <label for="Last Name">Address *</label>
              </div>
            </div>
          </div>
        </section>
        {/* <!--=============
         PERSONAL DATA
        ============ --> */}
        <section class="container">
          <div class="diversity_data educational_bg">
            <h2>Educational background</h2>
            {/* <!-- University Name --> */}
            <h5>University Name*</h5>
            <div class="personal_data inputData">
              <div class="input_parent">
                <input
                  id="myInput"
                  type="text"
                  name="myCountry"
                  placeholder="University Name"
                />
                <label for="Last Name">University Name</label>
              </div>

              <div class="input_parent">
                <input type="text" placeholder="Matric  Number *" />
                <label for="Last Name">Matric Number *</label>
              </div>
              <div class="input_parent">
                <input type="text" placeholder="Course of study *" />
                <label for="Last Name">Course of study *</label>
              </div>
              <div class="input_parent">
                <input type="text" placeholder="Faculty *" />
                <label for="Last Name">Faculty *</label>
              </div>
            </div>

            {/* <!-- cURRENT level --> */}
            <h5>Curent Level*</h5>
            <div class="personal_data">
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>100</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>200</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>300</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>400</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>500</span>
                </label>
              </div>

              <div class="input_parent">
                <input type="text" placeholder="Year of entry *" />
                <label for="Last Name">Year of entry *</label>
              </div>
              <div class="input_parent">
                <input
                  type="text"
                  placeholder="Expected Year of Graduation *"
                />
                <label for="Last Name">Expected Year of Graduation *</label>
              </div>
            </div>

            <h4>Learning Commitment</h4>
            {/* <!-- Learning Commitment --> */}
            <h5>
              How many hours can you dedicate to learning the skills each week?
              *
            </h5>
            <div class="personal_data">
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>4 hours</span>
                </label>
              </div>

              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>8 hours</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>Less than 8 hours</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>12 hours</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>Less than 8 hours</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>More than 12 hours</span>
                </label>
              </div>
            </div>

            <h5 class="top_form">Do you have a laptop? *</h5>
            <div class="personal_data">
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>No</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>Yes</span>
                </label>
              </div>
            </div>

            {/* <!-- Which network connection is strong in your location? * --> */}
            <h5 class="top_form">
              Which network connection is strong in your location? *
            </h5>
            <div class="personal_data">
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>Mtn</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>Glo</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" value="10" />
                  <span>9Mobile</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>Airtel</span>
                </label>
              </div>
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>Others</span>
                </label>
              </div>
            </div>

            <h5 class="top_form">
              On a scale of 1 - 10 (one being being not really important and ten
              being the most important - how important is this skills for you)?
            </h5>
            <div class="input_parent">
              <input type="number" placeholder="1 - 10" />
              <label for="Last Name">1 - 10</label>
            </div>
            {/* <!--  What makes you think you are fit for this opportunity? (200 words) * --> */}
            <h5 class="top_form">
              What makes you think you are fit for this opportunity? (200 words)
              *
            </h5>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Answer"
            ></textarea>

            {/* <!-- How will taking this course help you achieve your career goals? (200 words) * --> */}
            <h5 class="top_form">
              How will taking this course help you achieve your career goals?
              (200 words) *
            </h5>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Answer"
            ></textarea>

            {/* <!-- Upload File --> */}
            <h5 class="top_form">Upload a profile picture *</h5>

            <div class="upload_img">
              <label for="upload_img">
                Upload image
                <input type="file" id="upload_img" />
              </label>
            </div>
            {/* <!-- Upload File --> */}
            <h5 class="top_form">Upload your school ID *</h5>

            <div class="upload_img">
              <label for="upload_img">
                Upload image
                <input type="file" id="upload_img" />
              </label>
            </div>
            {/* <!--Promotional emails * --> */}
            <h5>
              Authorise that InstinctHub can process your data and send you
              promotional emails *
            </h5>
            <div class="personal_data">
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>Yes</span>
                </label>
              </div>

              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>No</span>
                </label>
              </div>
            </div>
            {/* <!--Sponsor emails * --> */}
            <h5>
              Authorise that InstinctHub can share name, email and phone numbers
              with sponsors. *
            </h5>
            <div class="personal_data">
              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>Yes</span>
                </label>
              </div>

              <div class="radio_parent">
                <label class="radio">
                  <input type="radio" name="scale" id="" value="10" />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          {/* <!--==============
        SUBMISSION BUTTON
      ================== --> */}
          <button type="submit" class="important-btn submit_bt">
            Submit Form
          </button>
        </section>
      </form>
    </>
  );
};

export default Form;
