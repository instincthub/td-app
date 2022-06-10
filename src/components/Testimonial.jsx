import React from "react";
import Slider from "react-slick";
import ReactTimeAgo from 'react-time-ago'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Settings } from "./static/assets/js/testimonial";
import { StarSVG } from "./StarSVG";
import ava1 from "./static/assets/images/img1.png";
import ava2 from "./static/assets/images/img2.png";
import ava3 from "./static/assets/images/img3.png";
import ava4 from "./static/assets/images/img4.png";
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
    let testimony_api = "https://instincthub/tech-diversity/api/testimonies/"
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "") {
      testimony_api = "http://127.0.0.1:8000/tech-diversity/api/testimonies/"
    }

    fetch("http://127.0.0.1:8000/tech-diversity/api/testimonies/")
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
      
      <div className="testimonial_box container">
      {console.log('items: ', items)}
      
        <div className="p_reviews">
          <h2>Don’t just take our words, hear from our students.</h2>
        </div>
        <div className="t_avatars">
          <div className="avatars__item">
            <div className="avatars__image">
              <img src={ava1} alt="" className="lap_1" />
              <img src={ava2} alt="" className="lap_2" />
              <img src={ava3} alt="" className="lap_3" />
              <img src={ava4} alt="" className="lap_4" />
              <p>
                <a href="https://www.google.com/search?q=instincthub&oq=instincthub&aqs=chrome..69i57j46i175i199i512j69i60l3j69i65j69i60j69i65.3360j0j1&sourceid=chrome&ie=UTF-8">50+ reviews</a>
              </p>
            </div>
          </div>
        </div>

        <Slider {...Settings} className="cell_box carousel_box owl-carousel">
          {items.map(item => {
            return(
              <div className="review_cards item">
                <div className="stars">
                  <img src={item.img} className="card_pic" alt={item.full_name}/>
                  <span className="card_name">
                    <h3>{item.full_name}</h3>
                    <h4>{item.position}</h4>
                    <StarSVG  rated={true}/>
                    <StarSVG  rated={true}/>
                    <StarSVG  rated={true}/>
                    <StarSVG  rated={true}/>
                    <StarSVG  rated={true}/>
                  </span>
                </div>
                <p>{item.content}</p>

                <div className="when">
                  <img src={require("./static/assets/svgs/time.svg").default} alt="Time icon" />
                  <span><ReactTimeAgo date={item.date} locale="en-US"/></span>
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
