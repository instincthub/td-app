import React from "react";
import { Link } from "react-router-dom";
import { navSlide } from "./static/assets/js/nav";
// import logo from "https://instincthub.com/static/instincthub-logo-.svg";

const Navbar = () => {
	return (
		<>
			<header>
				<nav className="container staff_nav blog_nav">
					<div className="burger" onClick={navSlide}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
					<Link to="/" className="link_logo">
						<img
							src={require("./static/assets/svgs/instincthub_logo.svg").default}
							alt="instincthub Logo"
						/>
					</Link>
					<ul className="navlinks vet blog_links">
						{/* <li>
              <div className="wrap_course">
                <span href="https://skills.instioncthub.com" className="dropdown">Library</span>
                <div className="mini_menu slide-bottom">
                  <a href="https://skills.instioncthub.com" className="track">
                    Course Details
                  </a>
                  <a href="">My Courses</a>
                </div>
              </div>
            </li> */}
						{/* <li>
              <a href="">Pricing</a>
            </li> */}
						<li>
							<a
								href="https://skills.instincthub.com/library"
								target="blank"
								itemProp="url"
							>
								Library
							</a>
						</li>
						<li>
							<a href="https://creator.instincthub.com/library">Create</a>
						</li>
						<li>
							<a href="https://creator.instincthub.com/cohorts">Cohorts</a>
						</li>
						<li>
							<a href="/#benefits">Benefits</a>
						</li>
						<li>
							<a href="https://instincthub.com/blog">Blog</a>
						</li>

						{/* <li>
              <a href="https://instioncthub.com/blog" target="blank">Blog</a>
            </li> */}

						<a href="https://skills.instincthub.com/cohorts/tech-diversity-40">
							<button className="important-btn default-btn">
								<span>Register</span>
							</button>
						</a>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
