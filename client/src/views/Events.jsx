import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import eventsImage from '../assets/home.png';

class Events extends Component {
  constructor() {
    super();
    this.currentPage = 1;
    this.numEvents = 10;
    let self = this;
  }

  componentDidMount() {
    this.changePage(1, null);
  }

  range(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

  changePage(n, e) {
    let newPage;

    if (e == null) newPage = n;
    else {
      if (e.target.innerText == 'Next ›') {
        newPage = this.currentPage + 1;
      } else {
        newPage = parseInt(e.target.innerText);
      }
    }
    if (newPage > Math.ceil(this.numEvents / 4)) return;

    let arr = document.getElementById('eventList').getElementsByClassName('event');
    let steps = 0;

    for (let i = 0; i < (newPage - 1) * 4; i++) {
      steps += 1;
      arr[i].style.display = 'none';
    }

    if (steps < arr.length)
      arr[steps].style.display = 'block';
    if (steps + 1 < arr.length)
      arr[steps + 1].style.display = 'block';
    if (steps + 2 < arr.length)
      arr[steps + 2].style.display = 'block';
    if (steps + 3 < arr.length)
      arr[steps + 3].style.display = 'block';

    for (let i = steps + 4; i < arr.length; i++) {
      arr[i].style.display = 'none';
    }

    this.currentPage = newPage;
  }

  render() {
    let self = this;
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

        <div id="eventList">
        <div class="event">
          <div class="date">
          <span class="number">
          23
          </span>
          <span class="month">
          Jan
          </span>
          </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">Calapalooza</p>
        </span>
        <div class="details">
          <span class="event-location">
          <span aria-hidden="true" class="icon icon-location"></span>
          Lower Sproul
          </span>
          <span class="event-time">
          <span aria-hidden="true" class="icon icon-clock"></span>
          Tuesday, 11 am - 2 pm
          </span>
          <p>
          Stop by our IEEE table at Calapalooza to learn more about us and how you can get involved!
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
        Jan
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">General Motors Infosession</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Tuesday, 6 pm - 7:30 pm
        </span>
        <p>
        Come out to the Wozniak Lounge on 1/23 for a chance to meet employees from GM, to learn about GM AND to get free pizza! Kevin Tierney, the GM director for "Vehicle Architecture Cybersecurity", will be giving a talk on addressing vehicle cybersecurity threat. Stay after to talk about potential employment or internship opportunities!
        <br />
        <br />
        <a class="blue" href="https://www.facebook.com/events/1715603525150725/">https://www.facebook.com/events/1715603525150725/</a>
        </p>
        </div>
        </div>
        </div>


        <div class="event">
        <div class="date">
        <span class="number">
        25
        </span>
        <span class="month">
        Jan
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">IEEE Spring 2018 Infosession</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Thursday, 8 pm
        </span>
        <p>
        Come out to UC Berkeley IEEE's infosession for the Spring 2018 semester to learn more about who we are, what we do, and how to get involved! We will be recruiting for many officer positions, regardless of your class standing and prior involvement with IEEE. Free Sliver pizza will be provided and we will be giving away swag!
        <br />
        <br />
        <a class="blue" href="https://www.facebook.com/events/393016431122760/">https://www.facebook.com/events/393016431122760/</a>
        </p>
        </div>
        </div>
        </div>


        <div class="event">
        <div class="date">
        <span class="number">
        7
        </span>
        <span class="month">
        Feb
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">Electronic Arts Infosession</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Wednesday, 6 pm - 8 pm
        </span>
        <p>
        Were you ever interested in working for the gaming industry? Come out to the Wozniak Lounge on February 7th at 6 PM to speak to EA employees and the type of projects that you can work on! Free food will be provided!
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
        Feb
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">IEEE 1st General Meeting</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Thursday, 8 pm
        </span>
        <p>
        
        </p>
        </div>
        </div>
        </div>

        <div class="event">
        <div class="date">
        <span class="number">
        20
        </span>
        <span class="month">
        Feb
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">Google Tech Talk</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Tuesday, 6 pm - 8 pm
        </span>
        <p>
        This session will focus on Google engineers (and Berkeley alum!) who work on the hardware team. They’ll provide insight into Google’s emergence into the HW market, the ups and down the teams face, and perform demos. We’ll provide swag and food, please RSVP through the link below to let us know you’ll be in attendance!
        </p>
        </div>
        </div>
        </div>

        <div class="event">
        <div class="date">
        <span class="number">
        2
        </span>
        <span class="month">
        Mar
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">IEEE Movie Night</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        HP Auditorium
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Friday, 5 pm
        </span>
        <p>
        
        </p>
        </div>
        </div>
        </div>

        <div class="event">
        <div class="date">
        <span class="number">
        7
        </span>
        <span class="month">
        Mar
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">GE Digital Infosession</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Wednesday, 6 pm - 8 pm
        </span>
        <p>
        GE Digital is the leading software company for the Industrial Internet. GE Digital is reimagining industry’s infrastructure by connecting software, apps and analytics to industrial businesses enabling them to operate smarter, faster and more efficiently.   Join GE engineers and recruiters to learn more about our technology and opportunities! Pizza will be served!  
        </p>
        </div>
        </div>
        </div>

        <div class="event">
        <div class="date">
        <span class="number">
        14
        </span>
        <span class="month">
        Mar
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">Palo Alto Networks Dinner</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Cory 258
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Wednesday, 6 pm - 9 pm
        </span>
        <p>
        Come talk with a few engineers and a recruiter from Palo Alto Networks! Find out the daily lives of Palo Alto Network engineers and ask them questions it on their projects. This event is only open for IEEE members. 
        </p>
        </div>
        </div>
        </div>

        <div class="event">
        <div class="date">
        <span class="number">
        15
        </span>
        <span class="month">
        Mar
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">IEEE 2nd General Meeting</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Thursday, 8 pm
        </span>
        <p>
        
        </p>
        </div>
        </div>
        </div>

        <div class="event">
        <div class="date">
        <span class="number">
        24
        </span>
        <span class="month">
        Apr
        </span>
        </div>
        <div class="event-past www">
        <span class="event-title">
        <p class="event-title">IEEE 2nd General Meeting</p>
        </span>
        <div class="details">
        <span class="event-location">
        <span aria-hidden="true" class="icon icon-location"></span>
        Wozniak Lounge
        </span>
        <span class="event-time">
        <span aria-hidden="true" class="icon icon-clock"></span>
        Tuesday, 8 pm
        </span>
        <p>
        
        </p>
        </div>
        </div>
        </div>

        </div>

        <div class="event-pagination">
        <nav class="pagination">
          {this.range(Math.ceil(this.numEvents/4)).map(function(index) {
            return <span><a style={{cursor: "pointer"}} onClick={(e) => self.changePage(null, e)}>{index} &nbsp;</a></span>;
          })}

        <span class="page gap">… &nbsp;</span>

        <span class="blue">
          <a style={{cursor: "pointer"}} onClick={(e) => this.changePage(null, e)}>Next ›</a>
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