import React from "react";
// import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="vimeo_v container">
      <div className="video_frame">
        {/* <iframe
          src="https://www.youtube.com/embed/fxZ4H-gq_lc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <iframe title="Tech Diversity in Niger Overview" src="https://player.vimeo.com/video/668725125?h=5533a272ad" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div className="ip_btn">
        {/* <Link to={"./"}>
          <button className="important-btn">Enroll Now</button>
        </Link> */}
      </div>
    </div>
  );
};

export default Video;
