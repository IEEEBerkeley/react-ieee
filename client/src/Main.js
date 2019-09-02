import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Events from './views/Events';
import Calendar from './views/Calendar.jsx';
import Industry from './views/industry/Industry';
import Sponsor from './views/industry/Sponsor';
//import Hope from './views/prodev/Hope';
//import Faq from './views/prodev/Faq';
import Resources from './views/prodev/Resources';
import Archive from './views/prodev/Archive';
import Micromouse from './views/Micromouse';
import About from './views/about/About';
import Contact from './views/about/Contact';
import Officers from './views/about/Officers';
import Apply from './views/Apply'
import Faq from './views/Faq'
import './assets/Main.css';

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/events' component={Calendar}/>
      <Route path='/events/calendar' component={Calendar}/>
      <Route exact path='/industry' component={Industry}/>
      <Route path='/industry/sponsors' component={Sponsor}/>
      {/*<Route exact path='/prodev' component={Hope}/>*/}
      {/*<Route path='/prodev/faq' component={Faq}/>*/}
      {/*<Route path='/prodev/resources' component={Resources}/>*/}
      {/*<Route path='/prodev/archive' component={Archive}/>*/}
      <Route path='/micromouse' component={Micromouse}/>
      <Route exact path='/about' component={About}/>
      <Route path='/about/leadership' component={Officers}/>
      {/*<Route path='/about/contact' component={Contact}/>*/}
      <Route exact path='/apply' component={Apply}/>
      <Route path='/apply/faq' component={Faq}/>
      <Route path='/*' component={Home}/>
    </Switch>
)

export default Main;
