import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import industryImage from '../../assets/industry.png';

class Industry extends Component {
  render() {
    return (
    <div>
      <div className="hero"
        style={{ backgroundImage: "url(" + industryImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/industry"}><li className="">Information</li></Link>
        <Link to={"/industry/sponsors"}><li className="">Sponsors</li></Link>
        </ul>
      </div>
      <div class = 'content'>
      <span class='heading blue'>
      Industrial Relations
      </span>
      <br>
      </br>
      <p>
      IEEE is a leading authority on areas ranging from aerospace systems, computers and telecommunications to biomedical engineering, electric power and consumer electronics among others. As the local chapter of IEEE, we strive to provide a faucet of talent and skill to the industry. As one of the world's leading engineering institutions, you can expect nothing but the best from UC Berkeley.
      </p>
      <br></br>
      <span class='subheading grey'>
      Infosessions
      </span>
      <br>
      </br>
      <p>
      In conjunction with the Electrical Engineering and Computer Science Department, UC Berkeley IEEE also co-hosts several recruiting and publicity Infosessions throughout the year. With typical attendances of over 60 people, our Infosessions are an effective means of reaching the EECS community. We publicize, staff, and acquire food for these events. All you bring is the presentation. Contact us to work out the logistics of holding an Infosession.
      </p>
      <br></br>
      <span class='subheading grey'>
      Corporate Sponsorship
      </span>
      <br>
      </br>
      <p>
      We are working on a Corporate Sponsorship Package that you can purchase. Please <a href="mailto:ieeeucb@gmail.com" class="blue" id="nationals-link">contact us</a> for more information.
      </p>
      <br></br>
      <span class='subheading grey'>
      Resume Book
      </span>
      <br>
      </br>
      <p>
      If you would like to order a Resume Book, please <a href="mailto:ieeeucb@gmail.com" class="blue" id="nationals-link">contact us</a>.
      </p>
      </div>
    </div>
    );
  }
}

export default Industry;
