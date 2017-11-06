import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.png';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="hero"
             style={{ backgroundImage: "url(" + homeImage + ")" }}>
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
            <span className="heading blue">
            Membership
            </span>
            <p>
            Club Membership has also been broken into 2 types, Officer and Member
            </p>
            <h3 className="blue">
            Member
            </h3>
            <p>
            Low to Minimal time commitment with continued perks such as
            </p>
            <ul>
            <li>
            Invitiations to events like Ski Trip, Banquet, Networking &amp; Alumni events
            </li>
            <li>
            Resume added to IEEE Resume Book
            </li>
            <li>
            May qualify for micromouse funding IEEE Micromouse<br />Article <a href="http://theinstitute.ieee.org/people/students/students-reinvent-micromouse-competition809" className="blue">click here</a>
            </li>
            </ul>
            <h3 className="blue">
            Officer
            </h3>
            <p>
            Required time commitment/duties with continued perks such as
            </p>
            <ul>
            <li>
            All Member benefits
            </li>
            <li>
            Access to Moore room (w/ mandatory staffing)
            </li>
            <li>
            Qualification to run/elect for director positions
            </li>
            <li>
            Subsidized events
            </li>
            <li>
            Business cards and an <a href="https://ieee.berkeley.edu/" className="blue">ieee.berkeley.edu</a> email address<a href="https://ieee.berkeley.edu/" className="blue"></a>
            </li>
            </ul>
            <span className="heading">
            <a href="https://ieee.berkeley.edu/events" className="blue">Upcoming Events</a>
            </span>
          </div>
          <div className="right">
            <span className="heading">
            <a className="blue">Photos</a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
