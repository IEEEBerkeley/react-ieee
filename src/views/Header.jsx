import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-cal vertically-centered" style={{marginTop: '14px', marginBottom: '14px'}}>
        <img alt={"Logo"}src={require("../assets/logo_main.png")} />
        </div>
        <div className="navigation">
        <ul>
          <li className="main">
          <Link to={"/events"}>EVENTS</Link>
          </li>
          <li className="option">
          <Link to={"/events"}>All Events</Link>
          </li>
          <li className="option">
          <Link to={"/events/calendar"}>Calendar</Link>
          </li>
          <li className="option">
          <Link to={"/events/photos"}>Photos</Link>
          </li>
        </ul>
        <ul>
          <li className="main">
          <Link to={"/industry"}>INDUSTRY</Link>
          </li>
          <li className="option">
          <Link to={"/industry"}>Information</Link>
          </li>
          <li className="option">
          <Link to={"/industry/sponsors"}>Sponsors</Link>
          </li>
          <li className="option">
          <Link to={"/industry/donate"}>Donate</Link>
          </li>
        </ul>
        <ul>
          <li className="main">
          <Link to={"/hope"}>H.O.P.E.</Link>
          </li>
          <li className="option">
          <Link to={"/hope"}>About</Link>
          </li>
          <li className="option">
          <Link to={"/hope/faq"}>FAQ</Link>
          </li>
          <li className="option">
          <Link to={"/hope/resources"}>Resources</Link>
          </li>
          <li className="option">
          <Link to={"/hope/archive"}>Archive</Link>
          </li>
        </ul>
        <ul>
          <li className="main">
          <Link to={"/micromouse"}>MICROMOUSE</Link>
          </li>
        </ul>
        <ul>
          <li className="main">
          <Link to={"/about"}>ABOUT</Link>
          </li>
          <li className="option">
          <Link to={"/about"}>Information</Link>
          </li>
          <li className="option">
          <Link to={"/about/officers"}>Officers</Link>
          </li>
          <li className="option">
          <Link to={"/about/contact"}>Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Header;