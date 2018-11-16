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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots : false,
        autoplaySpeed: 3500,
        dots: true,
        variablewidth: true
    };
    return (
    <LazyLoad height={200}>
      <Slider {...settings}>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse1.jpg')}/>
        </div>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse7.jpg')}/>
        </div>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse2.jpg')}/>
        </div>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse3.jpg')}/>
        </div>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse4.jpg')}/>
        </div>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse5.jpg')}/>
        </div>
        <div>
        <img alt="" src={require('../assets/micromouse/micromouse6.jpg')}/>
        </div>
      </Slider>
    </LazyLoad>
    );
  }
}
export default SimpleSlider;
