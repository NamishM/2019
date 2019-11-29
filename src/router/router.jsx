import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { ErrorPage } from '../modules/Error/components/Error';
import { NotFoundPage } from '../modules/NotFound/componnets/NotFound';
import {
  HomePage
} from './routes';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/home" render={() => <HomePage />} />
      <Route path="/notfound" component={NotFoundPage} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/" render={() => <Redirect to="/home" />} />
      <Route path="*" render={() => <Redirect to="/notfound" />} />
    </Switch>
  );
};