import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { BASE_ROUTE, HOME_ROUTE } from '../models/routes';
import Home from '../modules/Home/pages/HomePage';

export default (
  <div>
    <Switch>
      <Route path={HOME_ROUTE} exact component={Home} />
      <Redirect from={BASE_ROUTE} to={HOME_ROUTE} />
    </Switch>
  </div>
);
