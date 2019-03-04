import React, { Component } from 'react';
import micromouseImage from '../assets/micromouse.png';
import Slides from './MicromousePic.js';
import LazyLoad from 'react-lazyload';

class Micromouse extends Component {
  render() {
    return (
      <div>
        <html>
        <body>
            <div className="hero">
            <div id = "micromouseSlide">
            <LazyLoad height={200}>
                <Slides/>
            </LazyLoad>
            </div>
            </div>
        <div class='content'>
        <span class='heading blue'>
        Micromouse
        </span>

        <p>
        <br />
        The UC Berkeley IEEE Student Branch’s Micromouse DeCal is a hands-on course aimed at undergraduates with an interest in robotics. In the class, teams of 2~5 students are formed to build and program autonomous, maze-solving cars that follow the standards set in IEEE’s Micromouse competition.
        <br />
        <br />
         The course assumes no experience and will be based around a series of labs and project milestones that cover a wide range of robotics concepts. The course will expose students to Arduino programming, autonomous navigation, sensors, PID, and basic electrical engineering, while preparing them for an in-class competition at the end of each semester. Teams are also provided with the opportunity to qualify for funding to attend competitions among other schools in California and neighboring states.
         <br />
         <br />
          All necessary parts will be provided to students at no cost.
        </p>

        </div>
        </body>
        </html>
      </div>
    );
  }
}

export default Micromouse;
