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
          <div className="left">
          <table id="hope-resources">
          <tbody><tr>
          <th className="hope-header">Title</th>
          <th className="hope-header">Lectures</th>
          <th className="hope-header">Labs</th>
          </tr>
          <tr>
          <td className="hope-link">Course Introduction</td>
          <td className="hope-link"><a href="/course/materials/lectures/00.pdf" className="hope-resource">Lecture 0</a></td>
          <td className="hope-link"></td>
          </tr>
          <tr>
          <td className="hope-link">Safety, Soldering, Terminology</td>
          <td className="hope-link"><a href="/course/materials/lectures/01.pdf" className="hope-resource">Lecture 1</a></td>
          <td className="hope-link"></td>
          </tr>
          <tr>
          <td className="hope-link">Voltage, Current, Resistance</td>
          <td className="hope-link"><a href="/course/materials/lectures/02.pdf" className="hope-resource">Lecture 2</a></td>
          <td className="hope-link"><a href="/course/materials/labs/02.pdf" className="hope-resource">Lab 2</a></td>
          </tr>
          <tr>
          <td className="hope-link">Ohm's Law, Equivalent Resistance</td>
          <td className="hope-link"><a href="/course/materials/lectures/03.pdf" className="hope-resource">Lecture 3</a></td>
          <td className="hope-link"><a href="/course/materials/labs/03.pdf" className="hope-resource">Lab 3</a></td>
          </tr>
          <tr>
          <td className="hope-link">Capacitance</td>
          <td className="hope-link"><a href="/course/materials/lectures/04.pdf" className="hope-resource">Lecture 4</a></td>
          <td className="hope-link"><a href="/course/materials/labs/04.pdf" className="hope-resource">Lab 4</a></td>
          </tr>
          <tr>
          <td className="hope-link">Amplifiers</td>
          <td className="hope-link"><a href="/course/materials/lectures/05.pdf" className="hope-resource">Lecture 5</a></td>
          <td className="hope-link"><a href="/course/materials/labs/05.pdf" className="hope-resource">Lab 5</a></td>
          </tr>
          <tr>
          <td className="hope-link">Oscillators</td>
          <td className="hope-link"><a href="/course/materials/lectures/06.pdf" className="hope-resource">Lecture 6</a></td>
          <td className="hope-link"><a href="/course/materials/labs/06.pdf" className="hope-resource">Lab 6</a></td>
          </tr>
          <tr>
          <td className="hope-link">Silicon</td>
          <td className="hope-link"><a href="/course/materials/lectures/07.pdf" className="hope-resource">Lecture 7</a></td>
          <td className="hope-link"><a href="/course/materials/labs/07.pdf" className="hope-resource">Lab 7</a></td>
          </tr>
          <tr>
          <td className="hope-link">Transistors</td>
          <td className="hope-link"><a href="/course/materials/lectures/08.pdf" className="hope-resource">Lecture 8</a></td>
          <td className="hope-link"><a href="/course/materials/labs/08.pdf" className="hope-resource">Lab 8</a></td>
          </tr>
          <tr>
          <td className="hope-link">Digital Logic</td>
          <td className="hope-link"><a href="/course/materials/lectures/09.pdf" className="hope-resource">Lecture 9</a></td>
          <td className="hope-link"><a href="/course/materials/labs/09.pdf" className="hope-resource">Lab 9</a></td>
          </tr>
          <tr>
          <td className="hope-link">Final Projects!</td>
          <td className="hope-link"></td>
          <td className="hope-link"></td>
          </tr>
          <tr></tr>
          </tbody></table>
          </div>
          <div className="right">
          <span className="heading blue">Resources</span>
          <br />
          <br />
          <p>
          All the resources used to conduct the H.O.P.E course are available here. A syllabus outlining the course structure can also be found here.
          </p>
          <br />
          <p>
          Please e-mail the H.O.P.E. committee if you intend to use these resources outside of personal use.
          </p>
          <br />
          <a href="/course/materials/syllabus.pdf" className="blue">Course Syllabus</a>
          </div>

          </div>
        </div>
    );
  }
}

export default Hope;