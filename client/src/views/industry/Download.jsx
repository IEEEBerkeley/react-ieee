import React, { Component } from 'react';
import Pdf from './sponsor.pdf';

class Download extends Component {

  render() {

    return (
      <div className = "App">
        <a class="blue" href = {Pdf} target = "_blank" rel="noopener noreferrer" >Please read more about company sponsorship.</a>
      </div>
    );
  }
}

export default Download;
