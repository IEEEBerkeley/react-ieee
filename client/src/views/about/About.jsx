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
        <Link to={"/about/leadership"}><li className="">Officers</li></Link>
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
              The Institute of Electrical and Electronics Engineers is an international organization with over 350,000 members. The UC Berkeley   IEEE student branch was established in 1912 and is part of Region 6 (US - West) of the IEEE national branch. As one of the most   active Engineering student organization on campus, we aim to promote professional awareness, encourage academic growth, and organize social activities within the Engineering community.
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

          </div>
          {/*<div class='right'>
            <ul>
              <li>
                <a href="/ieeeconstitution.pdf">Our Constitution</a>
              </li>
              <li>
                <a href="/about/advisor">Our Advisor</a>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default About;
