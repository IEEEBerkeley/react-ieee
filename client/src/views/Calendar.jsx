import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import eventsImage from '../assets/home.png';
class Googlecal extends Component {
    constructor() {
        super();
    }
    iframe() {
        return {__html: this.props.iframe};
    }
    render() {
        return (
          <div>
            <div dangerouslySetInnerHTML={ this.iframe() } />
          </div>
        );
    }
}
const iframe = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%233366ff&amp;src=berkeley.edu_9k08nrpdahaujiva7u1ss9j92s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles" style="border:solid 1px #777" width="900" height="700" frameborder="0" scrolling="no"></iframe>';
const divStyle = {
  padding: '40px',
};

class Calendar extends Component {

  render() {
      let self = this;
      return (
        <div>
          <div className="hero"
          style={{ backgroundImage: "url(" + eventsImage + ")" }}>
          </div>

      <div class="content">

      <div class = "left">
          <span class="heading blue centertext">All Events</span>

          <div style = {divStyle}>
          <Googlecal iframe={iframe} />
          </div>
      </div>
    </div>
    </div>
    );
  }
}

export default Calendar;
