import React from "react";

function Participate() {
  return (
    <div>
      <div className="participate container">
        <h2>Why should you participate</h2>
        <div className="all_box">
          <div className="p_box">
            <img
              src={require("./static/assets/svgs/coding.svg").default}
              alt=""
            />
            <h3>Front End Web Development Skills</h3>
            <p>
              This involves the practice of translating data to a graphical
              interface using HTML, CSS, and JavaScript so that people can view
              and interact with that data
            </p>
          </div>

          <div className="p_box">
            <img
              src={require("./static/assets/svgs/money.svg").default}
              alt=""
            />
            <h3>Paid Internship by Sterling Bank and InstinctHub</h3>
            <p>
              The paid internship is often in the chosen field to all qualified
              candidates within the duration of the 6 months training period.
            </p>
          </div>
        </div>

        <div className="all_box">
          <div className="p_box">
            <img src={require("./static/assets/svgs/tv.svg").default} alt="" />
            <h3>Branded portfolio website for showcasing your new skills.</h3>
            <p>
              Strong personal branding makes you and your work that much more
              memorable while adding credibility to your craft
            </p>
          </div>

          <div className="p_box">
            <img src={require("./static/assets/svgs/pp.svg").default} alt="" />
            <h3>Networking and expossure with industry experts.</h3>
            <p>
              You get exposed to meeting other professionals both in your career
              field and in other related fields. Networking to foster
              relationships with others that are mutually beneficial to your
              careers.
            </p>
          </div>
        </div>

        <p>Apply now to get notification for the next batch.</p>
        <p>
          <a href="">Terms</a> and <a href="">Conditions</a> apply
        </p>
      </div>
    </div>
  );
}

export default Participate;
