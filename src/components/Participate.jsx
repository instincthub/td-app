import React from "react";

function Participate() {
  return (
    <div>
      <div className="participate container">
        <h2>Benefits</h2>
        <div className="all_box">
          <div className="p_box">
            <img
              src={require("./static/assets/svgs/coding.svg").default}
              alt=""
            />
            <h3>Codding Skills</h3>
            <p>
            Gain industry experience in building web applications using HTML, CSS and Javascript (Front End Web Development). Build web applications compatible with both mobile and desktop devices.
            </p>
          </div>

          <div className="p_box">
            <img
              src={require("./static/assets/svgs/money.svg").default}
              alt=""
            />
            <h3>Branded Portfolio</h3>
            <p>
            Want employers to trust you with the job? Then it would help if you had a unique portfolio. The course will help you create a sharable portfolio. 
            </p>
          </div>
        </div>

        <div className="all_box">
          <div className="p_box">
            <img src={require("./static/assets/svgs/tv.svg").default} alt="" />
            <h3>Paid Internship</h3>
            <p>
            There is a reward when you meet expectations, and when you exceed expectations, you deserve instant employment. Outstanding students get six months of paid internship.
            </p>
          </div>

          <div className="p_box">
            <img src={require("./static/assets/svgs/pp.svg").default} alt="" />
            <h3>Networking</h3>
            <p>
            Get access to industry experts! In addition, you get exposed to meeting other professionals in your career field and other related areas. 
            </p>
          </div>
        </div>

        <p>Apply now to get notification for the next batch.</p>
        <p>
          <a href="https://instincthub.com/privacy-policy">Terms</a> and <a href="https://instincthub.com/privacy-policy">Conditions</a> apply
        </p>
      </div>
    </div>
  );
}

export default Participate;
