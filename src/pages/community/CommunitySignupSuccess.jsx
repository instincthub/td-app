import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getCookie } from "../../components/static/assets/js/help_func";
import "../../components/static/assets/scss/staff.css";
import "../../components/static/assets/scss/diversity.css";
import "../../components/static/assets/scss/register.css";
import "../../components/static/assets/scss/custom-select.css";
import { LoginRequired } from "../../components/forms/LoginRequired";

class CommunitySignupSuccess extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: 0,
      error: null,
      login_redirect: null,
      next:(new URL(document.location)).searchParams.get('next')
    
    };
  }

  componentDidMount(){
    LoginRequired()
    
  }
  
  
  render(){ 
    return (
      <div>
        <Navbar />

            <form id='regForm'>
                <section className="container">
                    <div className="diversity_data register">
                      <h2>Community Signup:</h2>

                      <div className="personal_data">
                          <p>We've received your application; we will review it and let you know whether or not you met the expectation.</p>
                      </div>
                    
                    </div>
                </section>
            </form>
        <Footer />
      </div>
    );
  }
}

export default CommunitySignupSuccess;
