import React from "react";
import Whatsapp from "./static/assets/svgs/whatsapp.svg";
import Twitter from "./static/assets/svgs/twitter.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer_wrap container">
          <div class="quick_links">
            <ul>
              <h5>Instincthub</h5>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">Tech Diversity</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div class="quick_links">
            <ul>
              <h5>Courses</h5>
              <li>
                <a href="">HTML</a>
              </li>
              <li>
                <a href="">CSS</a>
              </li>
              <li>
                <a href="">Javascript</a>
              </li>
              <li>
                <a href="">Python</a>
              </li>
              <li>
                <a href="">Php</a>
              </li>
              <li>
                <a href="">Git</a>
              </li>
            </ul>
          </div>
          <div class="quick_links">
            <ul>
              <h5>Categories</h5>
              <li>
                <a href="">Privacy and policy</a>
              </li>
              <li>
                <a href="">Terms & Condition</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
            </ul>
          </div>

          <div class="quick_links">
            <ul>
              <h5>Contact us</h5>
              <li class="b_location">
                <a href="">58 Ilupeju Street, Dolphin Estate, Ikoyi, Lagos</a>
              </li>
              <li class="b_phone">
                <a href="">(+234) 816 288 0409</a>
              </li>
              <li class="b_email">
                <a href="">info@instincthub.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="social_media container">
          <div class="media">
            <a href="">
              <img src={Whatsapp} alt="whatsapp" />
            </a>
            <a href="">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="">
              <img
                src={require("./static/assets/svgs/facebook.svg").default}
                alt="facebook"
              />
            </a>
            <a href="">
              <img
                src={require("./static/assets/svgs/ig.svg").default}
                alt="Instagram"
              />
            </a>
            <a href="">
              <img
                src={require("./static/assets/svgs/linkedin.svg").default}
                alt="Linkedin"
              />
            </a>
          </div>
          <ul class="breadcrumb">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div class="copyright">
          <h5>© 2021 Instinct Hub Techsavvy</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
