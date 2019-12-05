import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memberImage from '../../assets/officer_photo_fa19_cropped.png';
import Mailto from 'react-protected-mailto';

class About extends Component {
  scrollToTop = () => {
    window.scrollTo(0,0);
  };


  render() {
    return (
      <div className="main">
        <div className="hero"
        style={{ backgroundImage: "url(" + memberImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/about"}><li className="">About</li></Link>
        <Link to={"/about/leadership"}><li className="">Officers</li></Link>
        <Link to={"/about/resource"}><li className="">Resources</li></Link>
        </ul>
        </div>
        <div className='content'>
            <span className='heading blue'>
            Who are we?
            </span>
            <br/>
            <br/>
            <span class='subheading orange'>
            Student Leaders
            </span>
            <p>
              The UC Berkeley IEEE student branch was established in 1912 and has been one of the most active engineering student organizations on campus ever since. We aim to promote professional development, encourage academic growth, and organize social activities within the greater engineering community. We host various events to encourage professional development within the EECS and greater engineering community at berkeley, ranging from company info-sessions, to research mixers, and resume workshops. Every semester, we compile a resume book that connects members with industry representatives.
              </p>
              <br/>
            <span class='subheading orange'>
            Mentors (and Mentees!)
            </span>
            <p>
              IEEE also hosts two classes (<a href="https://ieee.berkeley.edu/hope/" className="blue link">HOPE</a>, and <a href="/micromouse" className="blue link">micromouse</a>) intended to provide students with practical hands on experience in the EE/CS field. HOPE teaches PCB design, which is essential for miniaturizing electronic circuits. Micromouse guides students as they design an entire robotics project from the ground up, building their hardware and software skills.
            </p>
            <p>
            <br/>
              In addition to our decals, we have a Mentor and Mentee program that pairs students together for individualized advice in topics including -- but not limited to -- courses, career choices, and great opportunities to take advantage of.
              </p>
              <br/>
            <span class='subheading orange'>
            Family
            </span>
              <p>
              IEEE also hosts social events aimed at connecting the engineering community within Berkeley, these include board game nights, dinners, a ski retreat, and much more. We're students, just like you! Come out and have fun with us; did we mention that many of the events are subsidized?
            </p>
            <br/>
            <span class='heading orange'>
            Interested and want to get involved?
            <span class='subheading orange'>
            <br/>
            <Link to={"/Apply"}>Apply to be an officer!</Link>
            <br/>
            </span>
            <span class='subheading orange'>
            Become a general member!
            </span>
            </span>

            <p>
            To see what we have been up to recently, check out our <a  href="https://www.facebook.com/ieeeucb/" className="blue link">Facebook</a>, or <a href="https://www.instagram.com/ieeeucb/" className="blue link">Instagram</a>!
            </p>
            <br/>
            <p>
            Contact us:
            </p>
            <p>
            If you’d like to get in touch, please email us at <span className="blue link"><Mailto email='ieee@berkeley.edu' /></span>.</p>
            <br/>
            <h3 className='blue'>
            To be notified about upcoming events and opportunities,
            <form action="http://eepurl.com/c-RpPr" className="flex-item">
              <button className="homebutton" type="submit">Subscribe to our mailing list!</button>
            </form>
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
    );
  }
}

export default About;
