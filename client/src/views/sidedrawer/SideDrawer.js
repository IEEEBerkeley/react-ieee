import React, { Component } from 'react';

const sideDrawer = props => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = ['side-drawer open'];
  }
  return (<nav className={drawerClasses}>
    <ul>
      <li><a href="/"> HOME</a> </li>
      <li><a href="/events"> EVENTS</a> </li>
      <li><a href="/industry"> INDUSTRY</a> </li>
      <li><a href="/hope"> HOPE</a> </li>
      <li><a href="/micromouse"> MICROMOUSE</a> </li>
      <li><a href="/about"> ABOUT</a> </li>
      <li><a href="/apply"> APPLY</a> </li>
    </ul>
  </nav>
  );
};

export default sideDrawer;
