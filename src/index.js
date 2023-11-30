// index.js or your main entry file

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Ensure you import your Redux store

import App from './App'; // Assuming your main component is App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

