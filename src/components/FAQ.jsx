import { React, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faqJSON from "./static/json/faqs.json";
import { checkEnv, faqTag } from "./static/assets/js/help_func"; // check environment
import { fetchAPI, HOST_URL, reqOptions } from "./static/assets/js/help_func";

// import "./carousel";

import "./static/assets/scss/faq.css";

const FAQ = () => {
	const [items, setItems] = useState(null);
	useState(() => {
		const requestOptions = reqOptions("GET", null);
		fetchAPI(
			setItems,
			HOST_URL() + "/api/v1/assessments/skills/faqs/",
			requestOptions,
			true
		);
	});

	if (items) {
		// Check if items is greater than one
		return (
			<div
				id="faq"
				className="faq_main container"
				itemScope
				itemType="https://g.page/r/CR0XN_PyghOiEAE"
				onClick={(e) => faqTag(e)}
			>
				<div className="p_reviews">
					<h2 itemProp="tittle">Frequently Asked Questions</h2>
				</div>
				<div className="faq_wrap">
					{items.results.map((item, index) => {
						return (
							<div className="faq" key={index}>
								<div className="faq_text">
									<h3>{item.question}</h3>
									<p>{item.answer}</p>
								</div>
								<span className="btn">&#43;</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
};

export default FAQ;
