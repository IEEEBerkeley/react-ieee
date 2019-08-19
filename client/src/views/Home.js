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
        <h1 class="title">Connecting Engineers with Opportunities</h1>
        <p>The University of California, Berkeley IEEE Student Branch connects electrical
        engineering students with opportunities in electrical engineering and computer
        science.</p>
        <div class="section" id="a-recognized-presence-on-campus">
        <h1>A recognized presence on campus</h1>
        <p>Our student branch is involved on campus. Our student branch:</p>
        <ul class="simple">
        <li>Hosts presentations and workshops from technology companies</li>
        <li>Teaches elective engineering classes (&quot;DeCals&quot;)</li>
        <li>Represents student body in department town halls</li>
        <li>Maintains student &quot;maker spaces&quot; and amateur radio station</li>
        </ul>
        </div>
        <div class="section" id="opportunities-for-members">
        <h1>Opportunities for members</h1>
        <p>Our student branch provides opportunities for its members, including:</p>
        <ul class="simple">
        <li>Teaching</li>
        <li>Research</li>
        <li>Academic mentorship</li>
        <li>Technology industry internships and jobs<ul>
        <li>Resume book</li>
        <li>Dinners with our corporate sponsors</li>
        </ul>
        </li>
        <li>Professional skills<ul>
        <li>PCB Design (EE 198: Hands-On PCB Engineering)</li>
        <li>Robotics (EE 198: Micromouse)</li>
        </ul>
        </li>
        </ul>
        </div>
        <div class="section" id="join-our-community">
        <h1>Join our community</h1>
        <p>Participate in our community with:</p>
        <ul class="simple">
        <li>Social gatherings</li>
        <li>Officer retreats</li>
        <li>Community outreach</li>
        </ul>
        <p>Join our unique community by coming to one of our in-person meetings
        throughout the semester.</p>
        </div>
      </div>
    );
  }
}

export default Home;
