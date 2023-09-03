import { React, useState, useEffect } from "react";
import Slider from "react-slick";
import ReactTimeAgo from "react-time-ago";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "./static/assets/js/testimonial";
import { StarSVG } from "./StarSVG";
import { checkEnv } from "./static/assets/js/help_func"; // check environment
import { fetchAPI, HOST_URL, reqOptions } from "./static/assets/js/help_func";
import TestimonialJSON from "./static/json/testimonies.json";
import ava1 from "./static/assets/review-thumbnails/ally-kimi.png";
import ava2 from "./static/assets/review-thumbnails/gemma-usiku.png";
import ava3 from "./static/assets/review-thumbnails/joseph-chinedu.png";
import ava4 from "./static/assets/review-thumbnails/dalila-mn.png";
// import "./carousel";

import "./static/assets/scss/testimonial.css";

const Testimonial = () => {
	const [items, setItems] = useState(null);
	const [error, setError] = useState();
	useState(() => {
		const requestOptions = reqOptions("GET", null);
		fetchAPI(
			setItems,
			HOST_URL() + "/api/v1/assessments/skills/testimonies/",
			requestOptions,
			true
		);
	});

	if (items) {
		// Check if items is greater than one
		return (
			<div
				className="testimonial_box container"
				itemScope
				itemType="https://g.page/r/CR0XN_PyghOiEAE"
			>
				<div className="p_reviews">
					<h2 itemProp="tittle">Reviews from our students.</h2>
				</div>
				<div className="t_avatars">
					<div className="avatars__item">
						<div className="avatars__image" itemProp="thumbnails">
							<img
								src={ava1}
								itemProp="user"
								alt="ally kimi"
								className="lap_1"
							/>
							<img
								src={ava2}
								itemProp="user"
								alt="gemma usiku"
								className="lap_2"
							/>
							<img
								src={ava3}
								itemProp="user"
								alt="joseph chinedu"
								className="lap_3"
							/>
							<img
								src={ava4}
								itemProp="user"
								alt="dalila mn"
								className="lap_4"
							/>
							<p>
								<a
									href="https://www.google.com/search?q=instincthub&oq=instincthub&aqs=chrome..69i57j46i175i199i512j69i60l3j69i65j69i60j69i65.3360j0j1&sourceid=chrome&ie=UTF-8"
									target="blank"
									itemProp="url"
								>
									60+ reviews
								</a>
							</p>
						</div>
					</div>
				</div>
				<Slider {...Settings} className="cell_box carousel_box owl-carousel">
					{items.results.map((item, index) => {
						return (
							<div
								className="review_cards item"
								itemProp="customer review"
								key={index}
							>
								<div className="stars">
									<img
										src={item.img}
										className="card_pic"
										alt={item.full_name}
										itemProp="user"
									/>
									<span className="card_name">
										<h3 itemProp="name">{item.full_name}</h3>
										<h4 itemProp="position">{item.position}</h4>
										<div itemProp="rating">
											<StarSVG rated={true} itemProp="rating" />
											<StarSVG rated={true} itemProp="rating" />
											<StarSVG rated={true} itemProp="rating" />
											<StarSVG rated={true} itemProp="rating" />
											<StarSVG rated={true} itemProp="rating" />
										</div>
									</span>
								</div>
								<p itemProp="description">{item.content}</p>

								<div className="when" itemProp="date">
									<img
										itemProp="icon"
										src={require("./static/assets/svgs/time.svg").default}
										alt="Time icon"
									/>
									<span>
										<ReactTimeAgo
											dateTime={item.date}
											date={item.date}
											locale="en-US"
										/>
									</span>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
};

export default Testimonial;
