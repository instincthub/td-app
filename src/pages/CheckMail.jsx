import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, Link } from "react-router-dom";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";


function CheckMail() {
  return (
    <div>
      <Navbar />
		<div className="container">
			<div className="m-b-50 mb-7">
				<div class="mt-10">
					<div class="signup__header">
						<h1>Check your mailbox</h1>
						<p>
							We’ve sent an email to you with a link to confirm your account.
						</p>
					</div>
					<div class="signup__list">
						<h4 class="sub_header">Didn't get the email?</h4>
						<p>
							If you don’t see an email from us within 5 minutes, one of these
							things could have happened:
						</p>
						<ol type="1" class="numbered-list">
							<li>
								<span>The email is in your spam folder.</span>
							</li>
							<li>
								<span>The email address you entered had a typo.</span>
							</li>
							<li class="numbered-list--double">
								<span
									>You accidentally entered another email address. (Usually
									happens with auto-complete.)</span>
							</li>
							<li class="numbered-list--double">
								<span
									>We can’t deliver the email to this address. (Usually because
									of corporate firewalls or filtering.)</span>
							</li>
						</ol>
						<div className="mt-4">
                            <Link to="/register"><button className="outlined-btn d-inline-block">Re-enter your email and try again</button></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
      <Footer />
    </div>
  );
}

export default CheckMail;
