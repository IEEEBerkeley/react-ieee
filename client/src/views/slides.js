import React from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import homeImage from '../assets/home.png';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        dots : true,
        autoplaySpeed: 100
    };
    return (
      <Slider {...settings}>
        {/**}<div>
        <img alt="" src={require("../assets/logo_main.png")}/>
        </div>**/}
        <div>
          <img alt = "pic" src = {`https://robohash.org/0 `}/>
        </div>
        <div>
          <img alt = "pic" src = {`https://robohash.org/1 `}/>
        </div>
        <div>
          <img alt = "pic" src = {`https://robohash.org/2 `}/>
        </div>
        <div>
          <img alt = "pic" src = {`https://robohash.org/3 `}/>
        </div>
        <div>
          <img alt = "pic" src = {`https://robohash.org/4 `}/>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
