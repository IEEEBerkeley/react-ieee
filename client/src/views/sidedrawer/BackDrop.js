import React, { Component } from 'react';

const backdrop = props => (
  <div className="backdrop" onClick={props.click}/>
);

export default backdrop;
