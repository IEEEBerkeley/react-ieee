import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots : true,
        autoplaySpeed: 3500
    };
    return (
      <Slider {...settings}>
        <div>
        <img alt="" src={require('../assets/home.png')}/>
        </div>
        <div>
          <img alt = "pic" src={require('../assets/members.jpg')}/>
        </div>
        <div>
          <img alt = "pic" src={require('../assets/industry.png')}/>
        </div>
        <div>
          <img alt = "pic" src={require('../assets/officer_photo.jpg')}/>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
