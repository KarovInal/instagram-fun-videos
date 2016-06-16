import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import RootReducer from './reducers/index.js';
import thunkMiddleware from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { requestChangeChanels } from './actions/chanels.js';
import { incrementCountView } from  './actions/countView.js';
const logger = createLogger();

import App from './container/App.js'

var storeMiddleware = applyMiddleware(
  logger,
  thunkMiddleware
)(createStore)

var store = storeMiddleware(RootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'))
