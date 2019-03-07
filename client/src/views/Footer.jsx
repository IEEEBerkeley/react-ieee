import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
      <div className="footer">
      <div className="copyright vertically-centered" >
        <div className="logo-national">
        <a href="https://www.ieee.org/"><img alt={"Logo"} src={require("../assets/logo_kite.png")} /></a>
        </div>
      </div>
      <div className="media vertically-centered" style={{marginTop: '51px'}}>   {/* this one gets weird when deleted ^ */}
      <ul>
      <li className="mail">
        <a className="mailing" href="http://eepurl.com/c-RpPr"> Join our mailing list</a>
      </li>
      <li>
        <a href="https://www.facebook.com/pages/UC-Berkeley-IEEE/164764630218416" className="icon"><i className="icon-facebook"></i></a>
      </li>
      <li>
      <a href="https://www.linkedin.com/company/ieee-ucb/" className="icon"><i className="icon-linkedin"></i></a>
      </li>
      <li>
      <a href="https://www.instagram.com/ieeeucb/" className="icon"><i className="icon-instagram"></i></a>
      </li>
      </ul>
      <br />
      </div>
      </div>
      <p className="copyrighted">© Copyright 2019 UC Berkeley IEEE</p>
      </div>
    );
  }
}

export default Footer;
