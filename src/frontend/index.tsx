import React from 'react';
import { hydrate, render } from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './app';

declare global {
  interface Window {
    __APOLLO_STATE__: any;
  }
}

const history = createBrowserHistory();

const show = process.env.ENV === 'development' ? render : hydrate;

show(
  <Router history={history}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Router>,
  document.getElementById('root')
);
