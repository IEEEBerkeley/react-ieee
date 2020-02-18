import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          {/**
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
            **/}
            <div className="footercol">
            <a href="https://www.ieee.org/" className="footerlogo"><img alt={"Logo"} src={require("../assets/logo_kite.png")} /></a>
            </div>
            <div  className="footercol ">
            <div>
            <p className="copyright">© Copyright 2020 UC Berkeley IEEE</p>
            </div>
            </div>
            <div className="footercol">
            
            <ul id="iconlink">
              <li className="item">
              <a href="https://www.facebook.com/pages/UC-Berkeley-IEEE/164764630218416" target="_blank" rel="noopener noreferrer"  className="icon"><i className="icon-facebook"></i></a>
              </li>
              <li className="item">
              <a href="https://www.linkedin.com/company/ieee-ucb/"  target="_blank"  rel="noopener noreferrer"  className="icon"><i className="icon-linkedin"></i></a>
              </li>
              <li className="item">
              <a href="https://www.instagram.com/ieeeucb/" target="_blank"  rel="noopener noreferrer"  className="icon"><i className="icon-instagram"></i></a>
              </li>
            </ul>
            <form action="http://eepurl.com/c-RpPr"><button className="mailbutton" type="submit">Join Our Mailing List</button></form>
            <p className="contact_info">Contact us: <a href="mailto:inquiry@stac.berkeley.edu"><span><u>ieee@berkeley.edu</u></span></a></p>

            
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
