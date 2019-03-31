/* eslint-disable import/no-extraneous-dependencies,no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router';
import { routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import Page from './components/Page';
import reducers from './reducers';


const history = require('history').createBrowserHistory();

const middleware = [
  thunk,
  routerMiddleware(history),
];

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(...middleware),
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Page} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
