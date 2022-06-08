import React from "react";
import { hamBurger } from "./static/assets/js/nav";
// import logo from "https://instincthub.com/static/instincthub-logo-.svg";

const Navbar = () => {
  return (
    <>
      <header>
        <nav className="container staff_nav blog_nav">
          <div className="burger" onClick={hamBurger}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <img
            src={require("./static/assets/svgs/instincthub_logo.svg").default}
            alt="instincthub Logo"
          />
          <ul className="navlinks vet blog_links">
            <li>
              <div className="wrap_course">
                <a className="dropdown">Courses</a>
                <div className="mini_menu slide-bottom">
                  <a href="" className="track">
                    Courses Library
                  </a>
                  <a href="">My Courses</a>
                </div>
              </div>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <a href="">
              <button className="important-btn">Register</button>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
