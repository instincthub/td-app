import React from "react";
import Slider from "react-slick";
import ReactTimeAgo from 'react-time-ago'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "./static/assets/js/testimonial";
import { StarSVG } from "./StarSVG";
import ava1 from "./static/assets/review-thumbnails/ally-kimi.png";
import ava2 from "./static/assets/review-thumbnails/gemma-usiku.png";
import ava3 from "./static/assets/review-thumbnails/joseph-chinedu.png";
import ava4 from "./static/assets/review-thumbnails/dalila-mn.png";
// import "./carousel";

import './static/assets/scss/testimonial.css'

class Testimonial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    // Check if running on local
    let testimony_api_url = "https://instincthub.com/tech-diversity/api/testimonies/"
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
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

  const { error, isLoaded, items } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    console.log('Loading...')
    return <div>Loading...</div>;
  } else {
    return (
      
      <div className="testimonial_box container" itemScope itemType="https://g.page/r/CR0XN_PyghOiEAE">
        <div className="p_reviews">
          <h2 itemProp="tittle">Reviews from our students.</h2>
        </div>
        <div className="t_avatars">
          <div className="avatars__item">
            <div className="avatars__image" itemProp="thumbnails">
              <img src={ava1} alt="ally kimi" className="lap_1" />
              <img src={ava2} alt="gemma usiku" className="lap_2" />
              <img src={ava3} alt="joseph chinedu" className="lap_3" />
              <img src={ava4} alt="dalila mn" className="lap_4" />
              <p>
                <a href="https://www.google.com/search?q=instincthub&oq=instincthub&aqs=chrome..69i57j46i175i199i512j69i60l3j69i65j69i60j69i65.3360j0j1&sourceid=chrome&ie=UTF-8">60+ reviews</a>
              </p>
            </div>
          </div>
        </div>

        <Slider {...Settings} className="cell_box carousel_box owl-carousel">
          {items.map(item => {
            return(
              <div className="review_cards item" itemProp="customer review">
                <div className="stars">
                  <img src={item.img} className="card_pic" alt={item.full_name}/>
                  <span className="card_name">
                    <h3 itemProp="name">{item.full_name}</h3>
                    <h4 itemProp="position">{item.position}</h4>
                    <div itemProp="rating">
                      <StarSVG  rated={true}/>
                      <StarSVG  rated={true}/>
                      <StarSVG  rated={true}/>
                      <StarSVG  rated={true}/>
                      <StarSVG  rated={true}/>
                    </div>
                  </span>
                </div>
                <p itemProp="description">{item.content}</p>

                <div className="when" itemProp="date">
                  <img itemProp="icon" src={require("./static/assets/svgs/time.svg").default} alt="Time icon" />
                  <span><ReactTimeAgo dateTime={item.date} date={item.date} locale="en-US"/></span>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
      );
    };
  };
};

export default Testimonial;
