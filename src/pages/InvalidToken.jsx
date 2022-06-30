import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";

function InvalidToken() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h4>'Activation link is invalid!'</h4>
      </div>
      <Footer />
    </div>
  );
}

export default InvalidToken;
