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
                <a href="https://instincthub.com">About</a>
              </li>
              <li>
                <a href="https://instincthub.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://skills.instincthub.com">Courses</a>
              </li>
              <li>
                <a href="/">Tech Diversity</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/message/5IA2QYCI53SUM1?autoload=1&app_absent=0">Contact</a>
              </li>
            </ul>
          </div>
          <div class="quick_links">
            <ul>
              <h5>Courses</h5>
              <li>
                <a href="https://skills.instincthub.com/?subject=html">HTML</a>
              </li>
              <li>
                <a href="https://skills.instincthub.com/?subject=css">CSS</a>
              </li>
              <li>
                <a href="https://skills.instincthub.com/?subject=javascript">Javascript</a>
              </li>
              <li>
                <a href="https://skills.instincthub.com/?subject=python">Python</a>
              </li>
              <li>
                <a href="https://skills.instincthub.com/?subject=php">Php</a>
              </li>
              <li>
                <a href="https://skills.instincthub.com/?subject=git">Git</a>
              </li>
            </ul>
          </div>
          <div class="quick_links">
            <ul>
              <h5>Categories</h5>
              <li>
                <a href="https://instincthub.com/privacy-policy">Privacy and policy</a>
              </li>
              {/* <li>
                <a href="">Terms & Condition</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
              <li>
                <a href="">Events</a>
              </li> */}
            </ul>
          </div>

          <div class="quick_links">
            <ul>
              <h5>Contact us</h5>
              <li class="b_location">
                <a href="https://www.google.com/maps/dir/6.4495267,3.4296456/instincthub/@6.4528188,3.4024674,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b8b3555484bdd:0xa21382f2f337171d!2m2!1d3.4118836!2d6.4567576">58 Ilupeju Street, Dolphin Estate, Ikoyi, Lagos</a>
              </li>
              <li class="b_phone">
                <a href="tel:+2348162880409">(+234) 816 288 0409</a>
              </li>
              <li class="b_email">
                <a href="mail:skills@instincthub.com">skills@instincthub.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="social_media container">
          <div class="media">
            <a href="https://api.whatsapp.com/message/5IA2QYCI53SUM1?autoload=1&app_absent=0">
              <img src={Whatsapp} alt="whatsapp" />
            </a>
            <a href="https://www.twitter.com/instincthub">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="https://www.facebook.com/instincthub">
              <img
                src={require("./static/assets/svgs/facebook.svg").default}
                alt="facebook"
              />
            </a>
            <a href="https://www.instagram.com/instincthub_">
              <img
                src={require("./static/assets/svgs/ig.svg").default}
                alt="Instagram"
              />
            </a>
            <a href="https://www.linkedin.com/company/instincthub">
              <img
                src={require("./static/assets/svgs/linkedin.svg").default}
                alt="Linkedin"
              />
            </a>
          </div>
          {/* <ul class="breadcrumb">
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul> */}
        </div>
        <div class="copyright">
          <h5>© {new Date().getFullYear()} InstinctHub Techsavvy</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
