import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Events from './views/Events';
import Industry from './views/industry/Industry';
import Sponsor from './views/industry/Sponsor';
import Hope from './views/hope/Hope';
import Faq from './views/hope/Faq';
import Resources from './views/hope/Resources';
import Archive from './views/hope/Archive';
import Micromouse from './views/Micromouse';
import About from './views/about/About';
import Officers from './views/about/Officers';


const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/events' component={Events}/>
      <Route exact path='/industry' component={Industry}/>
      <Route path='/industry/sponsors' component={Sponsor}/>
      <Route exact path='/hope' component={Hope}/>
      <Route path='/hope/faq' component={Faq}/>
      <Route path='/hope/resources' component={Resources}/>
      <Route path='/hope/archive' component={Archive}/>
      <Route path='/micromouse' component={Micromouse}/>
      <Route exact path='/about' component={About}/>
      <Route path='/about/officers' component={Officers}/>
      <Route path='/about/contact' component={About}/>
      <Route path='/*' component={Home}/>
    </Switch>
)

export default Main;