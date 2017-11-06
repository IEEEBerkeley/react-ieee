import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memberImage from '../../assets/members.jpg';

class About extends Component {
  render() {
    return (
      <div>
        <div className="hero"
        style={{ backgroundImage: "url(" + memberImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/about"}><li className="">About</li></Link>
        <Link to={"/about/officers"}><li className="">Officers</li></Link>
        <Link to={"/about/contact"}><li className="">Contact</li></Link>
        </ul>
        </div>
        <div class='content'>
          <div class='left'>
            <span class='heading blue'>
            Who are we?
            </span>
            <br/>
            <br/>
            <p>
              The Institute of Electrical and Electronics Engineers is an international organization with over 350,000 members. The UC Berkeley   IEEE student branch was established in 1912 and is part of Region 6 (US - West) of the IEEE national branch. As one of the most   active EECS student organization on campus, we aim to promote professional awareness, encourage academic growth, and organize social activities within the EECS community.
            </p>
            <br/>
            <p>
              Please visit <a href="https://www.ieee.org" class="blue" id="nationals-link">www.ieee.org</a> to explore one of the best websites for electrical engineers and those interested in the field.
            </p>
            <br/>
            <h3 class='blue'>
              Be notified about upcoming events and opportunities by subscribing to our mailing list at the bottom of the page.
            </h3>
            <br/>
            <span class='heading blue'>
            Membership
            </span>
            <p>
              Club Membership has also been broken into 2 types, Officer and Member
            </p>
            <h3 class='blue'>
              Member
            </h3>
            <p>
              Low to Minimal time commitment with continued perks such as
            </p>
            <ul>
              <li>
                Invitiations to events like Ski Trip, Banquet, Networking & Alumni events
              </li>
              <li>
                Resume added to IEEE Resume Book
              </li>
              <li>
                May qualify for micromouse funding IEEE Micromouse<br/>Article <a href="http://theinstitute.ieee.org/people/students/students-reinvent-micromouse-competition809" class="blue">click here</a>
              </li>
            </ul>
            <h3 class='blue'>
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
                Business cards and an <a href="https://ieee.berkeley.edu" class="blue">ieee.berkeley.edu</a> email address<a href="https://ieee.berkeley.edu" class="blue"></a>
              </li>
            </ul>
          </div>
          <div class='right'>
            <ul>
              <li>
                <a href="/ieeeconstitution.pdf">Our Constitution</a>
              </li>
              <li>
                <a href="/about/advisor">Our Advisor</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;