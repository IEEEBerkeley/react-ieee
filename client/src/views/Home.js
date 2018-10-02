import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.png';
import Slides from './slides';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero">
            <Slides/>
             {/**style={{ backgroundImage: "url(" + homeImage + ")" }}>**/}
        </div>
        <div className="content">
          <div className="left">
          <span className="heading blue">
            Who are we?
            </span>
            <br />
            <br />
            <p>
            The Institute of Electrical and Electronics Engineers is an international organization with over 350,000 members. The UC Berkeley   IEEE student branch was established in 1912 and is part of Region 6 (US - West) of the IEEE national branch. As one of the most   active EECS student organization on campus, we aim to promote professional awareness, encourage academic growth, and organize social activities within the EECS community.
            </p>
            <br />
            <p>
            Please visit <a href="https://www.ieee.org/" className="blue" id="nationals-link">www.ieee.org</a> to explore one of the best websites for electrical engineers and those interested in the field.
            </p>
            <br />
            <h3 className="blue">
            Be notified about upcoming events and opportunities by subscribing to our mailing list at the bottom of the page.
            </h3>
            <br />
          </div>
          {/*<div className="right">
            <span className="heading">
            <a className="blue">Photos</a>
            </span>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Home;
