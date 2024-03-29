import React from "react";
import { removeVideo } from "./static/assets/js/nav";

const Overlay = () => {
	return (
		<>
			<div
				className="play_video container"
				id="video_holder"
				onClick={() => {
					document.querySelector(".play_video").style.display = "none";
				}}
				itemScope
				itemType="https://ft.intsincthub.com/enrol"
			>
				<img
					src={require("./static/assets/svgs/close_icon_white.svg").default}
					alt=""
					className="close_svg"
					onClick={removeVideo}
				/>
				<div className="video_frame container">
					<iframe
						itemProp="Video"
						title="Tech Diversity in Niger Overview"
						src="https://www.youtube.com/embed/QkLLdoJ0cAA?si=dcykPkAZ8Ne4lAiA"
						width="640"
						height="564"
						frameborder="0"
						allow="autoplay; fullscreen"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</>
	);
};

export default Overlay;
