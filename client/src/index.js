import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './redux/store';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import ReactGA from 'react-ga';

if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  ReactGA.initialize('UA-131760351-1', {
    debug: false,
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
  console.log = () => {};
}

axios.defaults.baseURL = '/api/';
axios.defaults.params = {};
axios.defaults.params['uuid'] =
  process.env.NODE_ENV === 'development' ? 'DEV-' + uuid().split('-')[0] : uuid().split('-')[0];

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
