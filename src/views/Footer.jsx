import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
      <div className="footer">
      <div className="copyright vertically-centered" style={{marginTop: '47px', marginBottom: '47px'}}>
      <div className="logo-national">
      <a href="https://www.ieee.org/"><img alt={"Logo"} src={require("../assets/logo_kite.png")} /></a>
      </div>
      <p>2017 UC Berkeley IEEE</p>
      </div>
      <div className="media vertically-centered" style={{marginTop: '51px', marginBottom: '51px'}}>
      <ul>
      <li>
      <form action="https://calmail.berkeley.edu//manage/list/listinfo_subscribe/ieee-members@lists.berkeley.edu" id="subscribe-list">
      <div className="input-append">
      <input name="address" placeholder="Enter email to join our mailing list" type="email" />
      <button className="clickable add-on" type="submit">
      <span aria-hidden="true" className="icon-arrow-right"></span>
      </button>
      </div>
      </form>
      </li>
      <li>
      <a href="https://www.facebook.com/pages/UC-Berkeley-IEEE/164764630218416">
      <span aria-hidden="true" className="icon icon-facebook"></span>
      </a>
      </li>
      <li>
      <a href="https://www.linkedin.com/groups/IEEE-UCB-Student-Branch-4549818">
      <span aria-hidden="true" className="icon icon-linkedin"></span>
      </a>
      </li>
      </ul>
      <p className="promise">No spam. We promise.</p>
      </div>
      </div>
      </div>
    );
  }
}

export default Footer;