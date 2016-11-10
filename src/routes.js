import React from 'react';
import { IndexRoute, Route  } from 'react-router';

import Home from './components/home';
import Layout from './components/layout';
import PapersIndex from './components/papers';

export default (
  <Route component={Layout} path='/'>
    <IndexRoute component={Home} />
    <Route component={PapersIndex} path='papers' />
  </Route>
);
