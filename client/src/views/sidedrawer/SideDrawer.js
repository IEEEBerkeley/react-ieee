import React from 'react';


const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = ['side-drawer open'];
  }
  const closeNav = () => {
    drawerClasses = ['side-drawer'];
  };
  return (<nav className={drawerClasses}>
    <a  className="closebtn" onClick={props.click}>&times;</a>
    <ul>
      <li><a href="/" className="page"> HOME</a> </li>
      <li><a href="/events"  className="page"> EVENTS</a> </li>
      <li><a href="/industry"  className="page"> INDUSTRY</a> </li>
      <li><a href="https://ieee.berkeley.edu/hope/"  className="page"> HOPE</a> </li>
      <li><a href="/micromouse"  className="page"> MICROMOUSE</a> </li>
      <li><a href="/about"  className="page"> ABOUT</a> </li>
      <li><a href="/apply"  className="page"> APPLY</a> </li>
    </ul>
  </nav>
  );
};

export default sideDrawer;
