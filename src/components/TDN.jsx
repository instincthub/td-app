import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./DiversityForm";
// import { Navbar, Banner, Features } from "./";
import "./static/assets/scss/staff.css";
import "./static/assets/scss/diversity.css";

function TDN() {
  return (
    <div>
      <Navbar />
      <Form />
      <Footer />
    </div>
  );
}

export default TDN;
