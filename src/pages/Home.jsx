import React from "react";
// import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Overview from "../components/Overview";
import Testimonial from "../components/Testimonial";
import Participate from "../components/Benefits";
import FAQ from "../components/FAQ";
import Video from "../components/Video";
import Overlay from "../components/Overlay";
import Footer from "../components/Footer";
// import { Navbar, Banner, Features } from "./";
import "../components/static/assets/scss/staff.css";
import "../components/static/assets/scss/diversity.css";
import SecondaryNavbar from "../components/SecondaryNavbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <SecondaryNavbar />
      <Banner />
      <Features />
      <Overview />
      <Participate />
      <Testimonial />
      <Video />
      <FAQ />
      <Overlay />
      <Footer />
    </div>
  );
}

export default App;
