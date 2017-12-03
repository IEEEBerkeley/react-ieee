import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hopeImage from '../../assets/hope.png';

class Hope extends Component {
  render() {
    return (
        <div>
        <div className="hero"
        style={{ backgroundImage: "url(" + hopeImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/prodev"}><li className="">PRODEV</li></Link>
        <Link to={"/prodev/faq"}><li className="">FAQ</li></Link>
        <Link to={"/prodev/resources"}><li className="">Resources</li></Link>
        <Link to={"/prodev/archive"}><li className="">Archive</li></Link>
        <li className="page">PRODEV</li>
        </ul>
        </div>
        <div className="content">
        <span className="heading blue">
        FAQ
        </span>
        <br />
        <br />
        <span className="subheading grey">
        What is the subject matter of the course?
        </span>
        <br />
        <br />
        <p>
        The class will go through the standard coursework of a first-semester-in-electronics course. We will start with the physics of charge, voltage, current, resistance, and capacitance. We will then abstract these concepts into circuit components and consider basic circuit analysis methods. After a solid foundation in passive circuits has been established, we will introduce active devices such as operational amplifiers, timers, and logic gates. Basic semiconductor physics will also be covered, including MOS transistors, diodes, and solar cells. Modern integrated circuit fabrication may be covered, if time permits.
        </p>
        <br />
        <span className="subheading grey">
        What are the key learning outcomes?
        </span>
        <br />
        <br />
        <p>
        Our goal is to provide a fun and interesting introduction to Electrical Engineering. Upon completion of HOPE, students will have obtained the knowledge required to understand the role electronics play in their day-to-day lives. They will also have learned practical skills that can be applied in personal projects. Past examples include blinking bicycle safety lights, battery powered iPhone chargers, battery powered guitar amplifiers, and more.
        </p>
        <br />
        <span className="subheading grey">
        How will student performance be evaluated?
        </span>
        <br />
        <br />
        <p>
        Regular attendance is required. Without practical, in-lab experience, the theory will be less meaningful. Students will also be evaluated upon participation. In order for students to learn from the lab component of the class, they must actually construct the circuits. As long as students simply attend, participate, and put effort into the class, they will receive a passing mark. The course curriculum and lesson and lab plans are carefully reviewed by professors in the Electrical Engineering department.
        </p>
        <br />
        <span className="subheading grey">
        How can I contact the instructors?
        </span>
        <br />
        <br />
        <p>
        Email the instructors at <span className="email">ieee-hope@lists.berkeley.edu</span>
        </p>

        </div>
        </div>
    );
  }
}

export default Hope;