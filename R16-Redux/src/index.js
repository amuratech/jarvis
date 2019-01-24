import React from 'react';
import ReactDOM from 'react-dom';
// import BrowserRouter from 'react-router-dom'
import { Provider } from 'react-redux';
import Router from './routes';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('app')
);

// module.hot.accept();
