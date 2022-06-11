import React  from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faqJSON from "./static/json/faqs.json";
// import "./carousel";

import './static/assets/scss/faq.css'
import { faqTag } from "./static/assets/js/faq";


class FAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            local: false,
        };
    }
  

    componentDidMount() {

        // Check if running on local

        let testimony_api_url = "https://instincthub.com/tech-diversity/api/testimonies/"
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
            this.setState({
                local: true
            });
            testimony_api_url = "http://127.0.0.1:8000/tech-diversity/api/testimonies/"
        }

        fetch(testimony_api_url)
        .then(res => res.json())
        .then(
            (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render(){
        
        const { error, isLoaded, items, local, myRef } = this.state;

        // hand error or return template json
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            console.log('Loading...')
            return <div>Loading...</div>;
        }
        if(local){
            this.setState({
                items: faqJSON,
            });
        }
    
        return (
        
            <div 
                id="faq"
                className="faq_main container" 
                itemScope itemType="https://g.page/r/CR0XN_PyghOiEAE"
                onClick={(e)=> faqTag(e)}>

                <h2 className="p_reviews" itemProp="tittle">Frequently Asked Questions</h2>

                <div className="faq_wrap">
                    {items.map(item => {
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
    };
};

export default FAQ;
