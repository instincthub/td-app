import React from "react";

function Participate() {
  return (
    <div id="benefits">
      <div className="participate container" itemScope itemType="https://ft.intsincthub.com/">
        <h2 itemProp="title">Benefits</h2>
        <div className="all_box">
          <div className="p_box">
            <img itemProp="icon"
              src={require("./static/assets/svgs/coding.svg").default}
              alt="Code Icon"
            />
            <h3 itemProp="title">Coding Skills</h3>
            <p itemProp="description">
            Gain industry experience in building web applications using HTML, CSS and Javascript (Front End Web Development). Build web applications compatible with both mobile and desktop devices.
            </p>
          </div>

          <div className="p_box">
            <img itemProp="icon"
              src={require("./static/assets/svgs/money.svg").default}
              alt="money icon"
            />
            <h3 itemProp="title">Branded Portfolio</h3>
            <p itemProp="description">
            Want employers to trust you with the job? Then it would help if you had a unique portfolio. The course will help you create a sharable portfolio. 
            </p>
          </div>
        </div>

        <div className="all_box">
          <div className="p_box">
            <img itemProp="icon" src={require("./static/assets/svgs/tv.svg").default} alt="tv icon" />
            <h3 itemProp="title">Paid Internship</h3>
            <p itemProp="description">
            There is a reward when you meet expectations, and when you exceed expectations, you deserve instant employment. Outstanding students get six months of paid internship.
            </p>
          </div>

          <div className="p_box">
            <img src={require("./static/assets/svgs/pp.svg").default} alt="people icon" itemProp="icon"/>
            <h3 itemProp="title">Networking</h3>
            <p itemProp="description">
            Get access to industry experts! In addition, you get exposed to meeting other professionals in your career field and other related areas. 
            </p>
          </div>
        </div>

        {/* <p>Apply now to get notification for the next batch.</p>
        <p>
          <a href="https://instincthub.com/privacy-policy">Terms</a> and <a href="https://instincthub.com/privacy-policy">Conditions</a> apply
        </p> */}
      </div>
    </div>
  );
}

export default Participate;
