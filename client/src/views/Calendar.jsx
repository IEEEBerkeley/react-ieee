import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
// import eventsImage from '../assets/home.png';
class Googlecal extends Component {
    iframe() {
        return {__html: this.props.iframe};
    }
    render() {
        return (
            <div class="calendar" dangerouslySetInnerHTML={ this.iframe() } />
        );
    }
}

let iframe = ''
if(window.innerWidth >= 500) {
  iframe = '<iframe src="https://calendar.google.com/calendar/b/1/embed?mode=MONTH&height=600&amp;wkst=1&amp;bgcolor=%233366ff&amp;src=berkeley.edu_9k08nrpdahaujiva7u1ss9j92s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles" style="border:solid 1px #777" width="900" height="700" frameborder="0" scrolling="no"></iframe>';
} else {
  iframe = '<iframe src="https://calendar.google.com/calendar/b/1/embed?mode=AGENDA&height=600&amp;wkst=1&amp;bgcolor=%233366ff&amp;src=berkeley.edu_9k08nrpdahaujiva7u1ss9j92s%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FLos_Angeles" style="border:solid 1px #777" width="450" height="700" frameborder="0" scrolling="no"></iframe>';
}
class Calendar extends Component {

  render() {
      return (
        <div className="main">
          <div class="content">
              <div class="imgDiv">
                <img src="../assets/recruitmentTimeline2020.png" />
              </div>
              <div class="containerCalendar">
                <Googlecal iframe={iframe} />
              </div>
          </div>
        </div>
    );
  }
}

export default Calendar;
