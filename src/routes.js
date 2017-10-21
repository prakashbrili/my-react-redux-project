import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import PageOne  from './containers/page_one';
import PageTwo from './containers/page_two';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pageOne" component={PageOne}/>
    <Route path="pageTwo" component={PageTwo}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
  </Route>
);
