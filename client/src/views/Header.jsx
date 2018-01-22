import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo-cal vertically-centered" style={{marginTop: '14px', marginBottom: '14px'}}>
        <Link to={"/"}>
        <img alt={"Logo"} src={require("../assets/logo_main.png")} />
        </Link>
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
          <Link to={"/prodev"}>PRODEV</Link>
          </li>
          <li className="option">
          <Link to={"/prodev"}>About</Link>
          </li>
          <li className="option">
          <Link to={"/prodev/faq"}>FAQ</Link>
          </li>
          <li className="option">
          <Link to={"/prodev/resources"}>Resources</Link>
          </li>
          <li className="option">
          <Link to={"/prodev/archive"}>Archive</Link>
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
          <Link to={"/about/leadership"}>Leadership</Link>
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