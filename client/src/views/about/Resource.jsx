import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memberImage from '../../assets/members.jpg';
import pdf1 from '../../assets/prodev/resume101-ieee.pdf';
import pdf2 from '../../assets/prodev/Tech_Beh_quest1.pdf';
import pdf3 from '../../assets/prodev/Tech_Beh_quest2.pdf';


class Resource extends Component {
  render() {
    return (
      <div className="main">
        <div className="hero"
        style={{ backgroundImage: "url(" + memberImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/about"}><li className="">About</li></Link>
        <Link to={"/about/leadership"}><li className="">Officers</li></Link>
        <Link to={"/about/resource"}><li className="">Resources</li></Link>
        </ul>
        </div>
        <div class='content'>
            <div class='resources'>
                <h2 class='blue'>Resume 101</h2>
                <embed src={pdf1} width="100%" height="500px" type="application/pdf"/>
                <h2 class='blue'>Interview Workshop</h2>
                <embed src={pdf2} width="100%" height="500px" type="application/pdf"/>
                <h2 class='blue'>Technical and Behavioral Questions</h2>
                <embed src={pdf3} width="100%" height="500px" type="application/pdf"/>
            </div>
        </div>
      </div>
    );
  }
}

export default Resource;