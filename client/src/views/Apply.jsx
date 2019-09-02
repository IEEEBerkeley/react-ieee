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
          <form action="https://tinyurl.com/ucbieeesp19" className="flex-item">
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
  		        These guidelines are for Committee Officers, and members are not required to meet these guidelines. However, IEEE members are to encouraged to meet come to as many events as possible as the events support the EECS community and IEEE's major initiatives. Each of these events are also great opportunities to meet your peers within IEEE!
  		        </p>
	          </p>

        </div>
      </div>
    );
  }
}

export default Apply;
