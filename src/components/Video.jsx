import React from "react";
import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="vimeo_v container" itemScope itemType="https://td.instincthub.com">
      <div className="video_frame">
        {/* <iframe
          src="https://www.youtube.com/embed/fxZ4H-gq_lc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
        <iframe itemProp="video" loading="lazy" title="Tech Diversity in Niger Overview" src="https://player.vimeo.com/video/668725125?h=5533a272ad" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div className="ip_btn">
        <Link to={"enrol"} itemProp="url">
          <button className="important-btn">Take Assessment</button>
        </Link>
      </div>
    </div>
  );
};

export default Video;
