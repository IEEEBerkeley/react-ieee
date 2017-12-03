import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventsImage from '../assets/home.png';

class Events extends Component {
  render() {
    return (
      <div>
        <div className="hero"
        style={{ backgroundImage: "url(" + eventsImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
          <Link to={"/industry"}><li className="">All Events</li></Link>
          {/*<Link to={"/industry/donate"}><li className="">Photos</li></Link>*/}
        </ul>
      </div>
        <div class="content">
        <div class="left">
        <span class="heading blue">All Events</span>

        <div class="event">
          <div class="date">
          <span class="number">
          26
          </span>
          <span class="month">
          Jan
          </span>
          </div>
        <div class="event-past www">
        <span class="event-title">
        <a href="/events/58" class="event-title">General Meeting</a>
        </span>
        <div class="details">
          <span class="event-location">
          <span aria-hidden="true" class="icon icon-location"></span>
          540 Cory
          </span>
          <span class="event-time">
          <span aria-hidden="true" class="icon icon-clock"></span>
          Tuesday, 7 pm - 9 pm
          </span>
          <p>
          Come learn about UC Berkeley IEEE and how you can be involved!
          </p>
        </div>
        </div>
        </div>


        <div class="event">
        <div class="date">
        <span class="number">
        8
        </span>
        <span class="month">
        Dec
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <a href="/events/55" class="event-title">Micromouse final competition!</a>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        299 Cory
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Tuesday, 7:30 am - 8 am
        </span>
        <p>
        Stop by to see our teams tackle our maze with their robot mice!
        </p>
        </div>
        </div>
        </div>


        <div class="event">
        <div class="date">
        <span class="number">
        23
        </span>
        <span class="month">
        Sep
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <a href="/events/57" class="event-title">The Changing Face of Computing, from Serves to Sensors</a>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Banatao Auditorium, Sutardja Dai Hall
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Wednesday, 12 pm - 1 pm
        </span>
        <p>
        EECS Department Colloquium Series and IEEE will co-host the first View from Top of the fall semester with Simon Segars, CEO, ARM Holdings. Mr. Segars will speak on The Changing Face of Computing, from Serves to Sensors: No longer relegated to a locked room in a building’s basement, computing is now all around us in plain sight – but we just cannot see it. This evolution of computing is having a profound impact on what we can achieve – and on the technology required to deliver computing. From servers to sensors, new technology is being invented while existing technology is re-invented.


        Lunch will be provided!

        http://engineering.berkeley.edu/news-events/events/view-top
        </p>
        </div>
        </div>
        </div>


        <div class="event">
        <div class="date">
        <span class="number">
        3
        </span>
        <span class="month">
        Sep
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <a href="/events/56" class="event-title">General Meeting #1</a>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        521 Cory Hall
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Thursday, 6:30 pm - 7:30 pm
        </span>
        <p>
        Come learn about being involved in IEEE at U.C. Berkeley!
        </p>
        </div>
        </div>
        </div>

        <div class="event-pagination">
          <nav class="pagination">
            
            
                <span class="page current">
          1
        </span>

                <span class="page">
          <a href="/events?page=2" rel="next">2</a>
        </span>

                <span class="page">
          <a href="/events?page=3">3</a>
        </span>

                <span class="page">
          <a href="/events?page=4">4</a>
        </span>

                <span class="page">
          <a href="/events?page=5">5</a>
        </span>

                <span class="page gap">…</span>

            <span class="next">
          <a href="/events?page=2" rel="next">Next ›</a>
        </span>

            <span class="last">
          <a href="/events?page=14">Last »</a>
        </span>

          </nav>

        </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Events;