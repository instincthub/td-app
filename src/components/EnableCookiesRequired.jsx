import React from 'react'
import { faqTag } from "./static/assets/js/faq";
import "../components/static/assets/scss/staff.css";

const EnableCookiesRequired = () => {
  return (
    <div 
        id="faq"
        className="faq_main container" 
        itemScope itemType="https://helpcenter.trendmicro.com/en-us/article/tmka-18108"
        onClick={(e)=> faqTag(e)}>
        <div className="faq_wrap">
          <div  className="p_reviews">
              <h2 itemProp="title" className='t-left'>We use cookies</h2>
          </div>
          <p>Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies.</p>
          <p>Use the descriptions below to enable your cookies. <strong>Refresh this page when you are done!</strong> It should load the right content.</p>

            
          <div className="faq">
            <div className="faq_text">
              <h3>Enable website cookies and JavaScript in <strong>Google Chrome</strong></h3>
              <ol>
                <li>Open <strong>Google Chrome.</strong></li>
                <li>On the upper right corner, click the <strong>Menu button ⋮</strong>, then choose Settings.</li>
                <li>Under <strong>Privacy and security</strong>, click <strong>Site Settings</strong>.</li>
                <p>- Scroll down until you see the <strong>Content</strong> section.</p>
                <p>- Select <strong>Cookies and other site data</strong>, then choose <strong>Allow all cookies.</strong></p>
                <p>- Select <strong>JavaScript</strong>, then choose <strong>Sites can use Javascript.</strong></p>
              </ol>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>Enable website cookies and JavaScript in <strong>Microsoft Edge</strong></h3>
              <ol>
                <li>Open <strong>Microsoft Edge</strong>.</li>
                <li>At the top right corner, click <strong>Settings and more</strong> , then choose <strong>Settings</strong>.</li>
                <li>Select <strong>Cookies and site permissions</strong>.</li>
                <p>- Click <strong>Manage and delete cookies and site data</strong>, then turn ON <strong>Allow sites to save and read cookie data (recommended)</strong>.</p>
                <p>- Select Cookies and other site data, then choose Allow all cookies.</p>
                <p>- Select <strong>JavaScript</strong> under <strong>Site permissions</strong>, then turn ON  <strong>Allowed (recommended)</strong>.</p>
              </ol>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>Enable website cookies and JavaScript in <strong>Mozilla Firefox</strong></h3>
              <ol>
              <strong>Note:</strong> By default, Javascript is automatically enabled in Firefox.
                <li>Open <strong>Mozilla Firefox</strong>.</li>
                <li>At the upper right, click the <strong>Menu button ☰</strong>, then select <strong>Settings</strong>.</li>
                <li>Select <strong>Privacy & Security</strong>, then choose <strong>Standard</strong> under <strong>Browser Privacy</strong>.</li>
              </ol>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <div className="faq">
            <div className="faq_text">
              <h3>Enable website cookies and JavaScript in Apple <strong>Safari</strong></h3>
              <ol>
                <li>Open <strong>Safari</strong>.</li>
                <li>At the upper left, click the <strong>Safari</strong> menu, then select <strong>Preferences</strong>.</li>
                <p>- Select the Privacy tab, then choose <strong>Never</strong> under <strong>Block cookies</strong>.</p>
                <p>- Select the <strong>Security</strong> tab, then check <strong>Enable JavaScript</strong> under <strong>Web content</strong>.</p>
              </ol>
            </div>
            <span className="btn">&#43;</span>
          </div>

          <p className='mt-3'>Need additional help? chat with us via</p>
          <a href="https://wa.me/message/5IA2QYCI53SUM1" target="_blank" rel="noreferrer">
            <button className="d-inline-block important-btn">
              <span>WhatsApp</span>
            </button>
          </a>
        </div>
    </div>
  )
}
export default EnableCookiesRequired
