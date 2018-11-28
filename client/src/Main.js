import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Events from './views/Events';
import Calendar from './views/Calendar.jsx';
import Industry from './views/industry/Industry';
import Sponsor from './views/industry/Sponsor';
import Hope from './views/prodev/Hope';
import Faq from './views/prodev/Faq';
import Resources from './views/prodev/Resources';
import Archive from './views/prodev/Archive';
import Micromouse from './views/Micromouse';
import About from './views/about/About';
import Contact from './views/about/Contact';
import Officers from './views/about/Officers';
import LazyLoad from 'react-lazyload';

const Main = () => (
    <Switch>
    <LazyLoad>
      <Route exact path='/' component={Home}/>
    </LazyLoad>
    <LazyLoad>
      <Route exact path='/events' component={Events}/>
    </LazyLoad>
    <LazyLoad>
      <Route path='/events/calendar' component={Calendar}/>}
    </LazyLoad>
    <LazyLoad>
      <Route exact path='/industry' component={Industry}/>
    </LazyLoad>
    <LazyLoad>
      <Route path='/industry/sponsors' component={Sponsor}/>
    </LazyLoad>
      {/*<Route exact path='/prodev' component={Hope}/>*/}
      {/*<Route path='/prodev/faq' component={Faq}/>*/}
      {/*<Route path='/prodev/resources' component={Resources}/>*/}
      {/*<Route path='/prodev/archive' component={Archive}/>*/}
      <LazyLoad>
      <Route path='/micromouse' component={Micromouse}/>
      </LazyLoad>
      <LazyLoad>
      <Route exact path='/about' component={About}/>
      </LazyLoad>
      <LazyLoad>
      <Route path='/about/leadership' component={Officers}/>
      </LazyLoad>
      <LazyLoad>
      <Route path='/about/contact' component={Contact}/>
      </LazyLoad>
      <LazyLoad>
      <Route path='/*' component={Home}/>
      </LazyLoad>
    </Switch>
)

export default Main;
