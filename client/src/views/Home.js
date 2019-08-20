import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/home.png';
import Slides from './slides';

class Home extends Component {
  render() {
    return (
      <div className="main">
          <Slides/>
        <div className="content">
          <span className="heading blue">Connecting Engineers with Opportunities</span>
            <p>The University of California, Berkeley IEEE Student Branch connects electrical
            engineering students with opportunities in electrical engineering and computer
            science.
            </p>
          <div class="section">
            <span className="heading blue">A recognized presence on campus</span>
            <p>Our student branch is involved on campus. Our student branch:</p>
            <ul class="simple">
              <li>Hosts presentations and workshops from technology companies</li>
              <li>Teaches elective engineering classes (&quot;DeCals&quot;)</li>
              <li>Represents student body in department town halls</li>
              <li>Maintains student &quot;maker spaces&quot; and amateur radio station</li>
            </ul>
          </div>
          <div class="section">
            <span className="heading blue">Opportunities for members</span>
            <p>Our student branch provides opportunities for its members, including:</p>
            <ul class="simple">
              <li>Teaching</li>
              <li>Research</li>
              <li>Academic mentorship</li>
              <li>Technology industry internships and jobs</li>
              <li>Resume book</li>
              <li>Dinners with our corporate sponsors</li>
              <li>Professional skills</li>
              <li>PCB Design (EE 198: Hands-On PCB Engineering)</li>
              <li>Robotics (EE 198: Micromouse)</li>
            </ul>
          </div>
          <div class="section">
            <span className="heading blue">Join our community</span>
            <p>Participate in our community with:</p>
            <ul class="simple">
              <li>Social gatherings</li>
              <li>Officer retreats</li>
              <li>Community outreach</li>
            </ul>
            <p>Join our unique community by coming to one of our in-person meetings
            throughout the semester.</p>
          </div>
          <h3 class="blue">Be notified about upcoming events and opportunities by subscribing to our mailing list at the bottom of the page.</h3>
        </div>
      </div>
    );
  }
}

export default Home;
