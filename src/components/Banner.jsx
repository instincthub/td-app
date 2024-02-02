import React from "react";
// import sterling from "./static/assets/images/sterling.jpg";
import tdnImg from "./static/assets/images/happy-african-american-couple-students-hugging-cl.jpeg";
import { showVideo } from "./static/assets/js/nav";
import styled from "styled-components";

function Banner() {
	return (
		<Header>
			<section>
				<div
					className="container diversity_banner"
					itemScope
					itemType="https://tech.intsincthub.com/register"
				>
					<div className="frace">
						<h1 itemProp="Tittle">
							Tech Diversity In Nigeria <span>(2024 edition)</span>
						</h1>
						<p itemProp="description">
							Our goal is to create a renewed sense of purpose through digital
							education. Train 100,000 people and place 20% into direct jobs.
							This will create wealth for families locked out of employment
							opportunities. Become a beneficiary!
						</p>

						<div className="v_btn">
							<button className="important-btn rollin">
								<a
									itemProp="url"
									href="https://skills.instincthub.com/cohorts/tech-diversity-40"
								>
									<span>Enroll Now</span>
								</a>
							</button>
							<button
								itemProp="video"
								className="default-btn watch_snip"
								onClick={showVideo}
							>
								Watch Video
							</button>
						</div>
					</div>

					<div className="pic_grid">
						<img src={tdnImg} alt="A lady siting with a laptop" />
					</div>

					<div className="sponsored"></div>
				</div>

				{/* <div className="container bysterling" itemScope itemType="https://ft.intsincthub.com/">
          <p itemProp="description">Sponsored by:</p>
          <img itemProp="Sterling Bank Logo" src={sterling} alt="Sterling Bank Logo" />
        </div> */}
			</section>
		</Header>
	);
}

export default Banner;

const Header = styled.div`
	min-height: 70vh;

	.diversity_banner {
		align-items: center;
		margin-top: calc(100vh - 76vh);
	}
`;
