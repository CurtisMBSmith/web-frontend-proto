import './styles/styles.scss';
import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, hashHistory } from 'react-router';
import MainApp from './pages/MainApp';
import TaskApp from './pages/TaskApp';
import UserApp from './pages/UserApp';
import app from './reducers';

let store = createStore(app);

render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={MainApp} />
      <Route path="/tasks" component={TaskApp} />
      <Route path="/auth" component={UserApp} />
    </Router>
  </Provider>,
  document.getElementById('content')
);
