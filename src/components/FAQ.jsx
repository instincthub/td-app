import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faqJSON from "./static/json/faqs.json";
import { checkEnv, faqTag } from "./static/assets/js/help_func"; // check environment
import { fetAPI, HOST_URL } from "./static/assets/js/help_func";

// import "./carousel";

import './static/assets/scss/faq.css'

class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        // Binding this keyword 
        // this.updateState = this.updateState.bind(this) 
    }
  
    componentDidMount(){ // Fetch faqs API in production
        // if (checkEnv() === "production") {
        //   fetAPI(this, HOST_URL()+"/api/v1/assessment/faqs/")
        // }
        // else if(checkEnv() === "local"){ // Fetch static json in local
        //   this.setState({
        //     items: faqJSON
        // })
        // } 
        fetAPI(this, HOST_URL()+"/api/v1/assessment/faqs/")
    }
    

    render(){
        const { items } = this.state;

        if(items.results){ // Check if items is greater than one
            return (
                <div 
                    id="faq"
                    className="faq_main container" 
                    itemScope itemType="https://g.page/r/CR0XN_PyghOiEAE"
                    onClick={(e)=> faqTag(e)}>

                    <div  className="p_reviews">
                        <h2 itemProp="tittle">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq_wrap">
                        {items.results.map(item => {
                            return(
                                <div className="faq">
                                    <div className="faq_text">
                                        <h3>{item.question}</h3>
                                        <p>{item.answer}</p>
                                    </div>
                                    <span className="btn">&#43;</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        }
    };
};

export default FAQ;
