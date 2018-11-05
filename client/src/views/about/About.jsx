import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memberImage from '../../assets/members.jpg';
import Mailto from 'react-protected-mailto';

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
        {/**<Link to={"/about/contact"}><li className="">Contact</li></Link>**/}
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
              The UC Berkeley IEEE student branch was established in 1912 and has been one of the most active engineering student organizations on campus ever since. We aim to promote professional development, encourage academic growth, and organize social activities within the greater engineering community. We host various events to encourage professional development within the EECS and greater engineering community at berkeley, ranging from company info-sessions, to research mixers, and resume workshops.
              </p>
              <br/>
              <p>IEEE also hosts social events aimed at connecting the engineering community within Berkeley, these include board game nights, dinners, a ski retreat, and much more. IEEE also hosts two classes (<a href="https://ieee.berkeley.edu/hope/" class="blue">HOPE</a>, and <a href="/micromouse" class="blue">micromouse</a>) intended to provide students with practical hands on experience in the EE/CS field.
            </p>
            <br/>
            <p>
            To see what we have been up to recently, check out our <a href="https://www.facebook.com/ieeeucb/" class="blue">Facebook</a>, or <a href="https://www.instagram.com/ieeeucb/" class="blue">Instagram</a>!
            </p>
            <br/>
            <p>
            Contact us:
            </p>
            <p>
            If you’d like to get in touch, please email us at <span class="blue"><Mailto email='ieee@berkeley.edu' /></span>.</p>
            <br/>
            <h3 class='blue'>
            To be notified about upcoming events and opportunities subscribe to our mailing list at the bottom of the page.
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
