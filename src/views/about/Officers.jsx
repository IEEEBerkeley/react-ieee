import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memberImage from '../../assets/members.jpg';


function tryAndDefault(str) {
  try {
    return require('../../assets/officers/exec/' + str);
  } catch(err) {
    return require('../../assets/officers/' + 'missing.png');
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <div className="hero"
        style={{ backgroundImage: "url(" + memberImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/about"}><li className="">About</li></Link>
        <Link to={"/about/officers"}><li className="">Officers</li></Link>
        <Link to={"/about/contact"}><li className="">Contact</li></Link>
        </ul>
        </div>
        <div className="content">
          <div className="left">
            <div id="face-grid" 
              style={{ display: "block" }}>
              <div className="officer-container cboxElement">
                <div className="tile"><img src={tryAndDefault("neeli.jpg")} /></div>
                <div className="tile salutation">
                  <div className="left-align"><span>Neeli Tummala</span><span className="rank">Chair</span></div>
                </div>
              </div>
              <div className="officer-container cboxElement">
                <div className="tile"><img src={tryAndDefault("andrew.jpg")} /></div>
                <div className="tile salutation">
                  <div className="left-align"><span>Andrew Chan</span><span className="rank">External V.P.</span></div>
                </div>
              </div>
              <div className="officer-container cboxElement">
                <div className="tile"><img src={tryAndDefault("alex.jpg")} /></div>
                <div className="tile salutation">
                  <div className="right-align"><span>Alex Kumamoto</span><span className="rank">Internal V.P.</span></div>
                </div>
              </div>
              <div className="officer-container cboxElement">
                <div className="tile"><img src={tryAndDefault("benjamin.jpg")} /></div>
                <div className="tile salutation">
                  <div className="right-align"><span>Benjamin Li</span><span className="rank">Treasurer</span></div>
                </div>
              </div>
              <div className="officer-container cboxElement">
                <div className="tile"><img src={tryAndDefault("kevin.jpg")} /></div>
                <div className="tile salutation">
                  <div className="left-align"><span>Kevin Ma</span><span className="rank">Secretary</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;