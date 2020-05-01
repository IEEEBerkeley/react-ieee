import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import industryImage from '../../assets/industry.png';
import LazyLoad from 'react-lazyload';
import Download from './Download';

class Sponsor extends Component {
  render() {
    return (
    <div className="main">
      <div className="hero"
        style={{ backgroundImage: "url(" + industryImage + ")" }}>
        </div>
        <div className="submenu">
        <ul>
        <Link to={"/industry"}><li className="">Information</li></Link>
        <Link to={"/industry/sponsors"}><li className="">Sponsors</li></Link>
        </ul>
      </div>
      <div class="content">
<div>
<span class="heading blue">Corporate Sponsors</span>
<div style={{marginLeft: -10 + 'px'}}>
<LazyLoad height={200}>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.wish.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-wish" src={require("../../assets/industry/sponsors/logo-wish.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.groupon.com" target="_blank" rel="noopener noreferrer"><img alt="Logo-groupon" src={require("../../assets/industry/sponsors/logo-groupon.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-microsoft" src={require("../../assets/industry/sponsors/logo-microsoft.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://google.com" target="_blank" rel="noopener noreferrer"><img alt="Logo-google" src={require("../../assets/industry/sponsors/logo-google.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.emc.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-emc" src={require("../../assets/industry/sponsors/logo-emc.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.shoretel.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-shoretel" src={require("../../assets/industry/sponsors/logo-shoretel.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.ti.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-ti" src={require("../../assets/industry/sponsors/logo-ti.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://oracle.com" target="_blank" rel="noopener noreferrer"><img alt="Logo-oracle" src={require("../../assets/industry/sponsors/logo-oracle.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.workday.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-workday" src={require("../../assets/industry/sponsors/logo-workday.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://adap.tv/" target="_blank" rel="noopener noreferrer"><img alt="Logo-adaptv" src={require("../../assets/industry/sponsors/logo-adaptv.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://solidworks.com" target="_blank" rel="noopener noreferrer"><img alt="Logo-solidworks" src={require("../../assets/industry/sponsors/logo-solidworks.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://a9.com" target="_blank" rel="noopener noreferrer"><img alt="Logo-a9" src={require("../../assets/industry/sponsors/logo-a9.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://gm.com" target="_blank" rel="noopener noreferrer"><img alt="Logo-gm" src={require("../../assets/industry/sponsors/logo-gm.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-salesforce" src={require("../../assets/industry/sponsors/logo-salesforce.png")} /></a>
</div>
</div>
<div class="sponsor-container">
<div class="sponsor">
<a href="https://bayareacircuits.com/" target="_blank" rel="noopener noreferrer"><img alt="Logo-bac" src={require("../../assets/industry/sponsors/logo-bac.png")} /></a>
</div>
</div>
</LazyLoad>
<div style={{clear: "both" }}></div>
</div>
<br />
<br />
<p>
Want to sponsor? <Download> </Download>
</p>

</div>

</div>
    </div>
    );
  }
}

export default Sponsor;
