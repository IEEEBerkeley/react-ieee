import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoad from 'react-lazyload';

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
        <LazyLoad height={200}>
        <img alt="" src={require('../assets/home.png')}/>
        </LazyLoad>
        </div>
        <div>
        <LazyLoad height={200}>
          <img alt = "pic" src={require('../assets/members.jpg')}/>
          </LazyLoad>
        </div>
        <div>
        <LazyLoad height={200}>
          <img alt = "pic" src={require('../assets/industry.png')}/>
          </LazyLoad>
        </div>
        <div>
        <LazyLoad height={200}>
          <img alt = "pic" src={require('../assets/officer_photo.jpg')}/>
          </LazyLoad>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
