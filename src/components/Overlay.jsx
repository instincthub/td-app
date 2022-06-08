import React from "react";
import { removeVideo } from "./static/assets/js/nav";

const Overlay = () => {
  return (
    <>
      <div className="play_video container" id="video_holder">
        <img
          src={require("./static/assets/svgs/close_icon.svg").default}
          alt=""
          className="close_svg"
          onClick={removeVideo}
        />
        <div className="video_frame container">
          <iframe
            src="https://www.youtube.com/embed/fxZ4H-gq_lc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Overlay;
