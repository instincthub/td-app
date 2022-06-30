import React from "react";
import {MediaLinks} from "./MediaLinks"

const Footer = () => {
  return (
    <>
      <footer itemScope itemType="https://instincthub.com">
        <div className="footer_wrap container">
          <div className="quick_links">
            <ul>
              <h5 itemProp="tittle">instinctHub</h5>
              <li>
                <a itemProp="url" href="https://instincthub.com">About</a>
              </li>
              <li>
                <a itemProp="url" href="https://instincthub.com/blog">Blog</a>
              </li>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com">Courses</a>
              </li>
              <li>
                <a itemProp="url" href="/">Tech Diversity</a>
              </li>
              <li>
                <a itemProp="url" href="https://api.whatsapp.com/message/5IA2QYCI53SUM1?autoload=1&app_absent=0">Contact</a>
              </li>
            </ul>
          </div>
          <div className="quick_links">
            <ul>
              <h5 itemProp="tittle">Courses</h5>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com/?subject=html">HTML</a>
              </li>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com/?subject=css">CSS</a>
              </li>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com/?subject=javascript">Javascript</a>
              </li>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com/?subject=python">Python</a>
              </li>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com/?subject=php">Php</a>
              </li>
              <li>
                <a itemProp="url" href="https://skills.instincthub.com/?subject=git">Git</a>
              </li>
            </ul>
          </div>
          <div className="quick_links">
            <ul>
              <h5 itemProp="tittle">Policies</h5>
              <li>
                <a itemProp="url" href="https://instincthub.com/privacy-policy">Privacy and policy</a>
              </li>
              {/* <li>
                <a itemProp="url" href="">Terms & Condition</a>
              </li>
              <li>
                <a itemProp="url" href="">Support</a>
              </li>
              <li>
                <a itemProp="url" href="">Events</a>
              </li> */}
            </ul>
          </div>

          <div className="quick_links">
            <ul>
              <h5 itemProp="tittle">Contact us</h5>
              <li className="b_location" itemProp="address">
                <a itemProp="url" href="https://www.google.com/maps/dir/6.4495267,3.4296456/instincthub/@6.4528188,3.4024674,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b8b3555484bdd:0xa21382f2f337171d!2m2!1d3.4118836!2d6.4567576">1 Apapa Lane, Dolphin Estate, Ikoyi, Lagos</a>
              </li>
              <li className="b_phone" itemProp="phone">
                <a itemProp="url" href="tel:+2348162880409">(+234) 816 288 0409</a>
              </li>
              <li className="b_email" itemProp="email">
                <a itemProp="url" href="mail:skills@instincthub.com">skills@instincthub.com</a>
              </li>
            </ul>
          </div>
        </div>

        <MediaLinks classList="container"/>
        <div className="copyright" itemProp="copyright">
          <h5 itemProp="tittle">© {new Date().getFullYear()} InstinctHub Techsavvy</h5>
        </div>
      </footer>
    </>
  );
};

export default Footer;
