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
const iframe = '<iframe src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=berkeley.edu_9k08nrpdahaujiva7u1ss9j92s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';

class Calendar extends Component {

  render() {
      let self = this;
      return (
        <div>
          <div className="hero"
          style={{ backgroundImage: "url(" + eventsImage + ")" }}>
          </div>
          <div className="submenu">
          <ul>
            <Link to={"/events"}><li className="">All Events</li></Link>
            <Link to={"/Calendar"}><li className="">Calendar</li></Link>
          </ul>
        </div>
      <div class="content">
     
      <div class = "left">
      <Googlecal iframe={iframe} />
      </div>

        </div>
      </div>
    );
  }
}

export default Calendar;
