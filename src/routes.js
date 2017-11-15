import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from './containers/home/home';
import PageOne  from './containers/page_one';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="pageOne" component={PageOne}/>
  </Route>
);



