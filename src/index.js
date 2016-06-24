import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import app from './reducers';

let store = createStore(app);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
