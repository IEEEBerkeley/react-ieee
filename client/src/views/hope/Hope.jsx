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
        <Link to={"/hope"}><li className="">H.O.P.E.</li></Link>
        <Link to={"/hope/faq"}><li className="">FAQ</li></Link>
        <Link to={"/hope/resources"}><li className="">Resources</li></Link>
        <Link to={"/hope/archive"}><li className="">Archive</li></Link>
        <li className="page">H.O.P.E.</li>
        </ul>
        </div>

        <div className="content">
        <div className="left">
        <span className="heading blue">
        Hands On Practical Electronics
        </span>
        <br />
        <br />
        <p>
        Over the last several years, the UC Berkeley IEEE Student Branch has been developing and facilitating its Hands On Practical Electronics classes for both university and high school audiences. Based on the principle that building a circuit on a breadboard is an intuitive and exciting way to introduce electrical engineering, each lesson features fundamental theory combined with a simple but practical application. After a brief lecture, students are equipped with a soldering iron, multimeter, board, and various electronic components from which they construct a device which clearly demonstrates the lesson's core concept. Thus after each lesson, the student leaves not only with new knowledge but also an application of that knowledge. Be it a night light, solar cell battery charger, thermometer, or digital lock, the class projects show that electrical engineering is not just abstract equations accessible only to a select few, but rather the power to control and design exciting real world applications accessible to all.
        </p>
        <br />
        <p>
        We say “accessible to all” with confidence because our lessons assume no background in the sciences and do not require any advanced math. The class is geared towards students outside the College of Engineering, and each semester we attract a diverse group of students with different backgrounds. The DeCal provides an opportunity for students to gain exposure to the field of electrical engineering without the commitment of a four-unit technical course. This also makes the course popular for students considering engineering, as it serves as a brief introduction to the material seen in EE 40/42/43/100.
        </p>
        <br />
        <p>
        We are also extending our efforts to local high schools. High school students are rarely exposed to any electrical engineering in their standard coursework, and what mere exposure they may get often comes from physics courses. However, these courses tend to stay in the realm of theory and do not emphasize the many applications of electrical engineering in every day life. As a consequence, many students are ill-informed about the field and are cautious about considering electrical engineering as a college major. Our goal is to help cultivate interest in the field and show high school students the many academic and professional opportunities in one of the biggest and most exciting industries.
        </p>
        </div>
        

        </div>
        </div>
       
    );
  }
}

export default Hope;