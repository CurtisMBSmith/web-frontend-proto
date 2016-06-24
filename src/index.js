import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import app from './reducers';
// import './styles.scss';

if (document.querySelectorAll('a').length) {
  require.ensure([], () => {
    const Button = require('./components/Button').default;
    const button = new Button('google.com');

    button.render('a');
  });
}

if (document.querySelectorAll('h1').length) {
  require.ensure([], () => {
    const Header = require('./components/Header').default;

    new Header().render('h1');
  });
}

let store = createStore(app);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('content')
);
