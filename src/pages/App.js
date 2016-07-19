import React from 'react';
import TaskBox from '../containers/TaskBox';
import TaskForm from '../containers/TaskForm';
import UserBox from '../containers/UserBox';
import SideBar from '../containers/SideBar';
import { createTask } from '../actions';

const App = (logged_in) => {
  return (
  <div>
    <SideBar />
    <div className="main-panel" >
      <UserBox />
      <TaskForm onSubmit={createTask} />
      <TaskBox />
    </div>
  </div>
)};

export default App;