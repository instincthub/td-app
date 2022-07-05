import React from "react";

export const MediaLinks = ({addClass, ...props}) =>{
  return (
    <div className="social_media">
        <div className={"media "+ addClass}>
            <a itemProp="url" href="https://api.whatsapp.com/message/5IA2QYCI53SUM1?autoload=1&app_absent=0" target="_blank">
              <img src={require("./static/assets/svgs/whatsapp.svg").default} alt="whatsapp" />
            </a>
            <a itemProp="url" href="https://www.twitter.com/instincthub" target="_blank">
              <img src={require("./static/assets/svgs/twitter.svg").default} alt="twitter" />
            </a>
            <a itemProp="url" href="https://www.facebook.com/instincthub" target="_blank">
              <img
                src={require("./static/assets/svgs/facebook.svg").default}
                alt="facebook"
              />
            </a>
            <a itemProp="url" href="https://www.instagram.com/instincthub_" target="_blank">
              <img
                src={require("./static/assets/svgs/ig.svg").default}
                alt="Instagram"
              />
            </a>
            <a itemProp="url" href="https://www.linkedin.com/company/instincthub" target="_blank">
              <img
                src={require("./static/assets/svgs/linkedin.svg").default}
                alt="Linkedin"
              />
            </a>
            <a itemProp="url" href="https://www.youtube.com/instincthub" target="_blank">
              <img
                src={require("./static/assets/svgs/youtube.svg").default}
                alt="Linkedin"
              />
            </a>
        </div> 
        {/* <ul className="breadcrumb">
            <li>
              <a itemProp="url" href="#">Terms & Conditions</a>
            </li>
            <li>
              <a itemProp="url" href="#">Privacy</a>
            </li>
          </ul> */}
    </div>
    
  );

}