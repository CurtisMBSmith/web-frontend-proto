import React from 'react';
import SideBar from '../containers/SideBar';
import { createTask } from '../actions';

const MainApp = (logged_in) => {
  return (
  <div>
    <SideBar />
    <div className="main-panel" >
      <h1>Web frontend prototyping</h1>
      <h2>Select a prototype on the left</h2>
    </div>
  </div>
)};

export default MainApp;