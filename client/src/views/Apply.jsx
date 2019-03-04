import React, { Component } from 'react';
import micromouseImage from '../assets/micromouse.png';

class Apply extends Component {
  render() {
    return (
      <div>
        <html>
        <body>
            <div className="hero"
                style={{ backgroundImage: "url(" + micromouseImage + ")" }}>
            </div>
        <div class='content'>
        <span class='heading blue'>
        Join IEEE!
        </span>
        <p>
        <br />
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
