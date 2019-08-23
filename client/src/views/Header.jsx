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
          <img alt={"Logo"} src={require("../assets/logo_main.png")} />
          </Link>
        </div>
        <div className="spacer"/>
        <div className="toolbar_navigation-items">
          <ul>
            <li><Link to="/"> HOME</Link> </li>
            <li><Link to="/events"> EVENTS</Link> </li>
            <li><Link to="/industry"> INDUSTRY</Link> </li>
            <li><a href="https://ieee.berkeley.edu/hope/"> HOPE</a> </li>
            <li><Link to="/micromouse"> MICROMOUSE</Link> </li>
            <li><Link to="/about"> ABOUT</Link> </li>
            <li><Link to="/apply"> APPLY</Link> </li>
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
