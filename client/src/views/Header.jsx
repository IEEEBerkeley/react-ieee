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
        </ul>
        <ul>
          <li className="main">
          <Link to={"/industry"}>INDUSTRY</Link>
          </li>
        </ul>
        <ul>
          <li className="main">
            <a href="https://ieee.berkeley.edu/hope/">HOPE</a>
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
        </ul>
        <ul>
          <li className="main">
            <Link to={"/apply"}>APPLY</Link>
          </li>
        </ul>
        </div>
      </div>
    )
  }
}

export default Header;
