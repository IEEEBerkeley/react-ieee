import React, { Component } from 'react';
import memberImage from '../assets/members.jpg';
import { Link } from 'react-router-dom';

class Apply extends Component {
  render() {
    return (
      <div className="main">
          <div className="hero"
              style={{ backgroundImage: "url(" + memberImage + ")" }}>
          </div>
          <div className="submenu">
            <ul>
            <Link to={"/apply"}><li className="">Apply</li></Link>
            <Link to={"/apply/faq"}><li className="">FAQ</li></Link>
            </ul>
          </div>
          <div class='content'>
          <span class='heading blue'> Apply to IEEE!</span>
          <form action="https://forms.gle/VXSeC8HsAjp8hMxYA" className="flex-item">
            <button className="homebutton" type="submit">Apply Now</button>
          </form>
          <br/>

	        <span class='heading blue'> Member Requirements </span>
			      <p>
  				    <br />
  				    <p>
  		        Events will be announced on Facebook and on Slack in addition to being posted on our calendar. Don't forget to sign-in at each event to indicate attendance.
  		        </p>

  		        <br />
  		        <p>
  		        <br />
  		        Guidelines for Committee Officers:
              <ul>
  		        	<li>Attend 1 Social Event</li>
  		        	<li>Attend 2 Professional Events</li>
  		        	<li>Attend 1 Volunteering Event</li>
              </ul>
  		        </p>
  		        <br />
  		        <p>
  		        These guidelines are for Committee Officers, and members are not required to meet these guidelines. However, IEEE members are to encouraged to meet come to as many events as possible as the events support the EECS community and IEEE's major initiatives. Each of these events are also great opportunities to meet your peers within IEEE! Also, please feel free to apply to our mentorship program! Mentees will be paired with mentors and will meet throughout the semester.
  		        </p>
              <br />
              <p>
  		        <br />
  		        Links are listed below:
              <ul>
  		        	<li>General Member Application (rolling): 
                  <a class="blue" href="https://forms.gle/BTG2sa4oR2foHxsBA">https://forms.gle/BTG2sa4oR2foHxsBA</a>
                </li>
  		        	<li>Committee Application (due 1/31): <a class="blue" href="https://forms.gle/Lxab4WLaMsHgA8kXA">https://forms.gle/Lxab4WLaMsHgA8kXA</a></li>
  		        	<li>Mentor Application  (due 1/31): 
                <a class="blue" href="https://forms.gle/6fShEMoim7nqXv2Q6">https://forms.gle/6fShEMoim7nqXv2Q6</a>
                </li>
                <li>Mentee Application (due 1/31): 
                <a class="blue" href="https://forms.gle/haUAZWzohSVs9UMG6">https://forms.gle/haUAZWzohSVs9UMG6</a>
                </li>
              </ul>
  		        </p>
	          </p>

        </div>
      </div>
    );
  }
}

export default Apply;
