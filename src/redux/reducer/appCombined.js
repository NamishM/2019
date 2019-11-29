import { app } from './appReducer';
import { browser } from './browser';
import { combineReducers } from 'redux';
import { location } from './location';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  app,
  browser,
  location,
  routing: routerReducer
});