import React, { Component } from 'react';
import memberImage from '../assets/members.jpg';

class Apply extends Component {
  render() {
    return (
      <div>
        <html>
        <body>
            <div className="hero"
                style={{ backgroundImage: "url(" + memberImage + ")" }}>
            </div>
        <div class='content'>
        <span class='heading blue'>
        Join IEEE!
        </span>
        <p>
        <br />
        <p> Apply
        <a href="https://tinyurl.com/ucbieeesp19" class="blue" target="_blank" rel="noopener noreferrer"> here</a>.
        </p>
        Contact us for more information.
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </p>

        </div>
        </body>
        </html>
      </div>
    );
  }
}

export default Apply;
