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
       <div class="content">
        <div class="left">
        <table id="hope-resources">
        <tbody><tr>
        <th class="hope-header">Title</th>
        <th class="hope-header">Lessons</th>
        <th class="hope-header">Handouts</th>
        <th class="hope-header">Labs</th>
        </tr>
        <tr>
        <td class="hope-link">Course Introduction</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/01.ppt" class="hope-resource">Lesson 1</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/01.pdf" class="hope-resource">Handout 1</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/01.pdf" class="hope-resource">Lab 1</a></td>
        </tr>
        <tr>
        <td class="hope-link">Voltage, Current, Resistance</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/02.ppt" class="hope-resource">Lesson 2</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/02.pdf" class="hope-resource">Handout 2</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/02.pdf" class="hope-resource">Lab 2</a></td>
        </tr>
        <tr>
        <td class="hope-link">Ohm's Law</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/03.ppt" class="hope-resource">Lesson 3</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/03.pdf" class="hope-resource">Handout 3</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/03.pdf" class="hope-resource">Lab 3</a></td>
        </tr>
        <tr>
        <td class="hope-link">Capacitance</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/04.ppt" class="hope-resource">Lesson 4</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/04.pdf" class="hope-resource">Handout 4</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/04.pdf" class="hope-resource">Lab 4</a></td>
        </tr>
        <tr>
        <td class="hope-link">Silicon, Breadboards</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/05.ppt" class="hope-resource">Lesson 5</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/05.pdf" class="hope-resource">Handout 5</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/05.pdf" class="hope-resource">Lab 5</a></td>
        </tr>
        <tr>
        <td class="hope-link">PN Junctions, Diodes, Solar Cells</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/06.ppt" class="hope-resource">Lesson 6</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/06.pdf" class="hope-resource">Handout 6</a></td>
        <td class="hope-link"></td>
        </tr>
        <tr>
        <td class="hope-link">MOSFETs</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/07.ppt" class="hope-resource">Lesson 7</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/07.pdf" class="hope-resource">Handout 7</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/07.pdf" class="hope-resource">Lab 7</a></td>
        </tr>
        <tr>
        <td class="hope-link">MOSFETs</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/08.ppt" class="hope-resource">Lesson 8</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/08.pdf" class="hope-resource">Handout 8</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/08.pdf" class="hope-resource">Lab 8</a></td>
        </tr>
        <tr>
        <td class="hope-link">CMOS, Digital Logic</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/09.ppt" class="hope-resource">Lesson 9</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/09.pdf" class="hope-resource">Handout 9</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/09.pdf" class="hope-resource">Lab 9</a></td>
        </tr>
        <tr>
        <td class="hope-link">Fabrication</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/10.ppt" class="hope-resource">Lesson 10</a></td>
        <td class="hope-link"><a href="/course/archive/materials/handouts/10.pdf" class="hope-resource">Handout 10</a></td>
        <td class="hope-link"><a href="/course/archive/materials/labs/10.pdf" class="hope-resource">Lab 10</a></td>
        </tr>
        <tr>
        <td class="hope-link">Inductors</td>
        <td class="hope-link"><a href="/course/archive/materials/lessons/11.ppt" class="hope-resource">Lesson 11</a></td>
        <td class="hope-link"></td>
        <td class="hope-link"></td>
        </tr>
        </tbody></table>
        </div>
        <div class="right">
        <span class="heading blue">Archive</span>
        <br />
        <br />
        <p>
        Prior resources used to conduct the H.O.P.E course are available here. A former syllabus outlining the course structure can also be found here.
        </p>
        <br />
        <p>
        Please e-mail the H.O.P.E. committee if you intend to use these resources outside of personal use.
        </p>
        <br />
        <a href="/course/archive/materials/syllabus.pdf" class="blue">Course Syllabus</a>
        </div>

        </div>
        </div>
    );
  }
}

export default Hope;