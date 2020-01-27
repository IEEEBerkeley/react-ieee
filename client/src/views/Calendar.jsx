import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import eventsImage from '../assets/home.png';
import timeline from '../assets/recruitmentTimeline2020.png';

class IFrameComponent extends Component {
    iframe() {
        return {__html: this.props.iframe};
    }
    render() {
        return (
            <div class="calendar" dangerouslySetInnerHTML={ this.iframe() } />
        );
    }
}

let iframe_cal = ''
if (window.innerWidth >= 500) {
  iframe_cal = '<iframe src="https://calendar.google.com/calendar/b/1/embed?mode=MONTH&height=600&amp;wkst=1&amp;bgcolor=%233366ff&amp;src=berkeley.edu_9k08nrpdahaujiva7u1ss9j92s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles" style="border:solid 1px #777" width="900" height="700" frameborder="0" scrolling="no"></iframe>';
} else {
  iframe_cal = '<iframe src="https://calendar.google.com/calendar/b/1/embed?mode=AGENDA&height=600&amp;wkst=1&amp;bgcolor=%233366ff&amp;src=berkeley.edu_9k08nrpdahaujiva7u1ss9j92s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles" style="border:solid 1px #777" width="450" height="700" frameborder="0" scrolling="no"></iframe>';
}

const iframe_airtable = '<script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrUx5RnoM7qhuzXL?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="1229" style="background: transparent; border: 1px solid #ccc;"></iframe>'

class Calendar extends Component {

  render() {
      return (
        <div className="main">
          <div className="submenu">
            <ul>
            <Link to={"/events"}><li className="">Calendar</li></Link>
            <Link to={"/checkin"}><li className="">Check-in</li></Link>
            </ul>
          </div>
          <div class="content">
              <div class="imgContainer">
              <div class="imgDiv">
                <img class="eventImg" src={timeline} />
              </div>
              </div>
              <div class="containerCalendar">
                <IFrameComponent iframe={iframe_cal} />
              </div>
          </div>
        </div>
    );
  }
}

export default Calendar;
