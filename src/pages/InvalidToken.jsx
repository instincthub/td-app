import React from "react";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import SecondaryNavbar from '../components/SecondaryNavbar';


function InvalidToken() {
  return (
    <div>
      <SecondaryNavbar />
      <div className="container mt-5 pt-10 pb-4">
        <h4>Activation link is invalid!</h4>
        <a href="/login">
          <button class="d-inline-block important-btn">
            <span>Try Login</span>
          </button>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default InvalidToken;
