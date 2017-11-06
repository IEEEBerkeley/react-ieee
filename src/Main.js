import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Events from './views/Events';
import Industry from './views/Industry';
import Calendar from './views/Industry';
import Hope from './views/hope/Hope';
import Faq from './views/hope/Faq';
import Resources from './views/hope/Resources';
import Archive from './views/hope/Archive';
import Micromouse from './views/Micromouse';
import About from './views/about/About';
import Officers from './views/about/Officers';
import Contact from './views/about/Contact';


const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={Events}/>
      <Route path='/industry' component={Industry}/>
      <Route exact path='/hope' component={Hope}/>
      <Route path='/hope/faq' component={Faq}/>
      <Route path='/hope/resources' component={Resources}/>
      <Route path='/hope/archive' component={Archive}/>
      <Route path='/micromouse' component={Micromouse}/>
      <Route exact path='/about' component={About}/>
      <Route path='/about/officers' component={Officers}/>
      <Route path='/about/contact' component={Contact}/>
      <Route path='/*' component={Home}/>
    </Switch>
)

export default Main;