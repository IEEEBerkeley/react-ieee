import React, { Component } from 'react';
import memberImage from '../assets/members.jpg';

class Apply extends Component {
  render() {
    return (
      <div className="main">
        <html>
	        <body>
	            <div className="hero"
	                style={{ backgroundImage: "url(" + memberImage + ")" }}>
	            </div>

		        <div class='content'>
			        <span class='heading blue'>
			        Join Us @ UC Berkeley IEEE!
			        </span>
			        <p>
				        <br />
				        <p> Apply
				        <a href="https://tinyurl.com/ucbieeesp19" class="blue" target="_blank" rel="noopener noreferrer"> here </a> to become a General Member.
				        </p>
				    </p>

				    <br />

			        <span class='heading blue'>
			        Member Requirements
			        </span>
					<p>
						<br />

						<p>
				        Events will be announced on Facebook and on Slack in addition to being posted on our calendar. Don't forget to sign-in at each event to indicate attendance.
				        </p>

				        <br />
				        <p>
				        General Members:
				        	<li> Attend 1 Social Event & 2 Academic/Professional Events </li>
				        <br />
				        Committee/Leadership:
				        	<li> Volunteer for 1 hour at the Startup Fair/Soda Hacks </li>
				        	<li> Volunteer for 3 hours of Service/Outreach events or cookie runs </li>
				        	<li> Volunteer for one finals breakfast (replaceable with 2 hours of additional service/outreach) </li>
				        </p>

				        <br />

				        <p>
				        These requirements are to encourage you to support the EECS community and IEEE's major initiatives, and each of these events will be a great opportunity to meet your peers within IEEE!
				        </p>
			        </p>
		        </div>
	        </body>
        </html>
      </div>
    );
  }
}

export default Apply;
