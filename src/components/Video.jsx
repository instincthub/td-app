import React from "react";
// import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="vimeo_v container">
      <div className="video_frame">
        <iframe
          src="https://www.youtube.com/embed/fxZ4H-gq_lc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
