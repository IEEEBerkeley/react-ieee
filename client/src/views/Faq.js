import React, { Component } from 'react';
import memberImage from '../assets/members.jpg';
import { Link } from 'react-router-dom';
const faqData = require('./faq.json');


class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: faqData["FAQ"]
    };
  }
  render() {
    return (
      <div className="main">
        <div className="hero"
          style={{ backgroundImage: "url(" + memberImage + ")" }}>
        </div>
        <div className="submenu">
          <ul>
            <Link to={"/apply"}><li className="">Apply</li></Link>
            <Link to={"/apply/faq"}><li className="">FAQ</li></Link>
          </ul>
        </div>
        <div className='content'>
          <div className="faq">
            <span className='heading blue'>
            Frequently Asked Questions
            </span>
            {this.state.list.map(item => (
              <div>
                <div className="faq-question">
                  {item["Question"]}
                </div>
                <div className="faq-answer">
                  {item["Answer"]}
                </div>
              </div>
            ))}
            <div className="faq-question">
              How do I sign up for the decals you offer?
            </div>
            <div className="faq-answer">
              Sign up information for decals can be found on the decal website. Information about Micromouse can be found <a className="blue" href="https://decal.berkeley.edu/courses/5033">here </a>
              and HOPE can be found <a className="blue" href="https://decal.berkeley.edu/courses/4918">here</a>.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
