import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import { ErrorPage } from '../modules/Error/components/Error';
import { NotFoundPage } from '../modules/NotFound/componnets/NotFound';
import BasicLayout from '../layouts/BasicLayout';
import {
  HomePage
} from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" render={() => <BasicLayout><HomePage /></BasicLayout>} />
        <Route path="/notfound" component={NotFoundPage} />
        <Route path="/error" component={ErrorPage} />
        <Route path="/" render={() => <Redirect to="/home" />} />
        <Route path="*" render={() => <Redirect to="/notfound" />} />
      </Switch>
    </BrowserRouter> 
  );
};