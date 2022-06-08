import React from "react";
import { Outlet, Link } from "react-router-dom";
import sterling from "./static/assets/images/sterling.jpg";
import people from "./static/assets/images/grid_style.jpg";
import { showVideo } from "./static/assets/js/nav";

function Banner() {
  return (
    <div>
      <section>
        <div className="container diversity_banner">
          <div className="frace">
            <h1>
              Tech Diversity In Nigeria <span>(2022 edition)</span>
            </h1>
            <p>
              While most people referred to tech as the new oil, We believed
              that tech is beyond just the new oil, it is a unique opportunity
              to position young minds to take their own future in their hands,
              create value, and ultimately create opportunities for themselves.
            </p>

            <div className="v_btn">
              <button className="important-btn rollin">
                {/* <a href="../techDiversity/diversityForm.html">Enroll Now </a> */}
                <Link to="/signup">Enroll Now</Link>
              </button>
              <button className="default-btn watch_snip" onClick={showVideo}>
                Watch Video
              </button>
            </div>
          </div>

          <div className="pic_grid">
            <img src={people} alt="sterling" />
          </div>

          <div className="sponsored"></div>
        </div>

        <div className="container bysterling">
          <p>Sponsored by:</p>
          <img src={sterling} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Banner;
