import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bannerlogo from '../assets/logo_kite.png'
// import Slides from './slides';
import Particles from 'react-particles-js';


class Home extends Component {
  render() {
    return (
      <div className="main">
        <div id="homebanner">
        <div id="particles">
        <Particles
            params={{
        	    "particles": {
        	        "number": {
        	            "value": 400,
        	            "density": {
        	                "enable": false
        	            }
        	        },
        	        "size": {
        	            "value": 3,
        	            "random": true,
        	            "anim": {
        	                "speed": 4,
        	                "size_min": 0.3
        	            }
        	        },
        	        "move": {
        	            "random": true,
        	            "speed": 1,
        	            "direction": "top",
        	            "out_mode": "out"
        	        },
                  "shape": {
                      "type": "circle"
                  },
                  "line_linked": {
                      "enable": false,
                  }
        	    },
        	    "interactivity": {
        	        "events": {
        	            "onhover": {
        	                "enable": true,
        	                "mode": "grab"
        	            },
        	            "onclick": {
        	                "enable": true,
        	                "mode": "repulse"
        	            }
        	        },
        	        "modes": {
        	            "grab": {
        	                "distance": 250,
                          "line_linked": {
                              "opacity": .25
                          }
        	            },
        	            "repulse": {
        	                "distance": 400,
        	                "duration": 4
        	            }
        	        }
        	    }
        	}} />
          </div>
          <div className="slogan-container">
            <div clasname="slogan_img">
                <img  alt={"Logo"} src={bannerlogo} />
            </div>
            <div className="slogan">
                <h1 className="white">Connecting Engineers with Opportunities</h1>
                <p className="white">
                The University of California, Berkeley IEEE Student Branch connects electrical
                engineering students with opportunities in electrical engineering and computer
                science.
                </p>
            </div>
          </div>
        </div>
        
        <div className="content">
          <div className="section">

            <div className="section_title blue">A recognized presence on campus</div>
            <div className="section_descipt">
            <p>Our student branch is involved on campus. Our student branch:</p>
              <div className="list_section">
                <ul className="list_descript">
                  <li>Hosts presentations and workshops from technology companies</li>
                  <li>Teaches elective engineering classes (&quot;DeCals&quot;)</li>
                  <li>Represents student body in department town halls</li>
                  <li>Maintains student &quot;maker spaces&quot; and amateur radio station</li>
                </ul>
              </div>
              <div className="center flexbutton">
                <Link to="/events"  className="flex-item">
                  <button className="homebutton">Upcoming Events</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="section">

            <div className="section_title blue">Opportunities for members</div>
            <div className="section_descipt">
            <p>Our student branch provides opportunities for its members, including:</p>
            <div className="list_section">
              <ul className="list_descript">
                <li>Teaching</li>
                <li>Research</li>
                <li>Academic mentorship</li>
                <li>Technology industry internships and jobs</li>
                <li>Resume book</li>
                <li>Dinners with our corporate sponsors</li>
                <li>Professional skills</li>
                <li className="nestedlist">
                  <ul className="list_descript">
                    <li>PCB Design (EE 198: Hands-On PCB Engineering)</li>
                    <li>Robotics (EE 198: Micromouse)</li>
                  </ul>
                </li>
              </ul>
              </div>
              <div className="center flexbutton">
                <Link to="/micromouse"  className="flex-item">
                  <button className="homebutton">About    Micromouse</button>
                </Link>
                <a href="https://ieee.berkeley.edu/hope/"  className="flex-item">
                  <button className="homebutton">About    H.O.P.E.</button>
                </a>
              </div>
            </div>
          </div>



          <div className="section">
            <div className="section_title blue">Join our community</div>

            <div className="section_descipt">
              <p>Participate in our community with:</p>
            <div className="list_section">
              <ul className="list_descript">
                <li>Social gatherings</li>
                <li>Officer retreats</li>
                <li>Community outreach</li>
                <li>Join our unique community by coming to one of our in-person meetings throughout the semester.</li>
              </ul>
            </div>
            <div className="center flexbutton">
              <form action="http://eepurl.com/c-RpPr" className="flex-item">
                <button className="homebutton" type="submit">Subscribe to Our Newsletter</button>
              </form>
              <Link to="/apply"  className="flex-item">
                <button className="homebutton">Learn how to join</button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
