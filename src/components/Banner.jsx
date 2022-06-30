import React from "react";
// import { Link } from "react-router-dom";
import sterling from "./static/assets/images/sterling.jpg";
import people from "./static/assets/images/grid_style.jpg";
import { showVideo } from "./static/assets/js/nav";

function Banner() {
  return (
    <div>
      <section>
        <div className="container diversity_banner" itemScope itemType="https://ft.intsincthub.com/enrol">
          <div className="frace">
            <h1 itemProp="Tittle">
              Tech Diversity In Nigeria <span>(2022 edition)</span>
            </h1>
            <p itemProp="description">
            Position yourself for a unique opportunity and endless possibilities! Join other university students to unlock your coding skills.
            </p>

            <div className="v_btn">
              {/* <button className="important-btn rollin">
                <Link itemProp="url" to="/register">Enroll Now</Link>
              </button> */}
              <button itemProp="video" className="default-btn watch_snip" onClick={showVideo}>
                Watch Video
              </button>
            </div>
          </div>

          <div className="pic_grid">
            <img src={people} alt="sterling"/>
          </div>

          <div className="sponsored"></div>
        </div>

        <div className="container bysterling" itemScope itemType="https://ft.intsincthub.com/">
          <p itemProp="description">Sponsored by:</p>
          <img itemProp="Sterling Bank Logo" src={sterling} alt="Sterling Bank Logo" />
        </div>
      </section>
    </div>
  );
}

export default Banner;
