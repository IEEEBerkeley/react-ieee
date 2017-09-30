import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Events from './views/Events';
import Industry from './views/Industry';
import Calendar from './views/Industry';
import Hope from './views/Hope';
import Micromouse from './views/Micromouse';
import About from './views/About';

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={Events}/>
      <Route path='/industry' component={Industry}/>
      <Route path='/hope' component={Hope}/>
      <Route path='/micromouse' component={Micromouse}/>
      <Route path='/about' component={About}/>
    </Switch>
)

export default Main;