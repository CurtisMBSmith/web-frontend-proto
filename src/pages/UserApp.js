import React from 'react';
import UserBox from '../containers/UserBox';
import SideBar from '../containers/SideBar';
import { createTask } from '../actions';

const UserApp = () => {
  return (
  <div>
    <SideBar />
    <div className="main-panel" >
      <UserBox />
    </div>
  </div>
)};

export default UserApp;