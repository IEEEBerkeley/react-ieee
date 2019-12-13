import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './sidedrawer/DrawerToggleButton'
import SideDrawer from './sidedrawer/SideDrawer'
import BackDrop from './sidedrawer/BackDrop'
class Header extends Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div style = {{height: '100%'}}>
      <div className="toolbar">
        <nav className="toolbar_navigation">
        <div className="toolbar_logo" style={{marginTop: '14px', marginBottom: '14px'}}>
          <Link to={"/"} onClick = {this.scrollToTop}>
          <img alt={"Logo"} src={require("../assets/logo_main.png")} />
          </Link>
        </div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
          <ul>
            <li><Link to="/" onClick = {this.scrollToTop}> HOME</Link> </li>
            <li><Link to="/events" onClick = {this.scrollToTop}> EVENTS</Link> </li>
            <li><Link to="/industry" onClick = {this.scrollToTop}> INDUSTRY</Link> </li>
            <li><a href="https://ieee.berkeley.edu/hope/" onClick = {this.scrollToTop}> HOPE</a> </li>
            <li><Link to="/micromouse" onClick = {this.scrollToTop}> MICROMOUSE</Link> </li>
            <li><Link to="/about" onClick = {this.scrollToTop}> ABOUT</Link> </li>
            <li><Link to="/apply" onClick = {this.scrollToTop}> APPLY</Link> </li>
          </ul>
        </div>
        <div className="toolbar__toggle-button">
        <DrawerToggleButton click={this.drawerToggleClickHandler}/>
        </div>
        </nav>
      </div>
      <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
      {backdrop}
      </div>
    )
  }
}

export default Header;
