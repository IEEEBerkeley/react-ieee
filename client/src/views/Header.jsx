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

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div style = {{height: '100%'}}>
      <div className="toolbar">
        <nav className="toolbar_navigation">
        <div className="toolbar_logo" style={{marginTop: '14px', marginBottom: '14px'}}>
          <Link to={"/"}>
          <img alt={"Logo"} src={require("../assets/logo_main2.png")} />
          </Link>
        </div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
          <ul>
            <li><a href="/"> HOME</a> </li>
            <li><a href="/events"> EVENTS</a> </li>
            <li><a href="/industry"> INDUSTRY</a> </li>
            <li><a href="https://ieee.berkeley.edu/hope/"> HOPE</a> </li>
            <li><a href="/micromouse"> MICROMOUSE</a> </li>
            <li><a href="/about"> ABOUT</a> </li>
            <li><a href="/apply"> APPLY</a> </li>
          </ul>
        </div>
        <div className="toolbar__toggle-button">
        <DrawerToggleButton click={this.drawerToggleClickHandler}/>
        </div>
        </nav>
      </div>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {backdrop}
      </div>
    )
  }
}

export default Header;
