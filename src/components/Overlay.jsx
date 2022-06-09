import React from "react";
import { removeVideo } from "./static/assets/js/nav";

const Overlay = () => {
  return (
    <>
      <div className="play_video container" id="video_holder"
      onClick={()=>{
        document.querySelector(".play_video").style.display = "none";
        }}>
        <img
          src={require("./static/assets/svgs/close_icon.svg").default}
          alt=""
          className="close_svg"
          onClick={removeVideo}
        />
        <div className="video_frame container">
          <iframe title="Tech Diversity in Niger Overview" src="https://player.vimeo.com/video/668725125?h=5533a272ad" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </div>
    </>
  );
};

export default Overlay;
