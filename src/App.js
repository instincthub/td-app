import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Features from "./Features";
import Overview from "./Overview";
import Testimonial from "./Testimonial";
import Participate from "./Participate";
import Video from "./Video";
import Overlay from "./Overlay";
import Footer from "./Footer";
// import { Navbar, Banner, Features } from "./";
import "../src/static/assets/scss/staff.css";
import "../src/static/assets/scss/diversity.css";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <Overview />
      <Participate />
      <Testimonial />
      <Video />
      <Overlay />
      <Footer />
    </div>
  );
}

export default App;
