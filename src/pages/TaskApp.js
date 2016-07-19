import React from 'react';
import TaskBox from '../containers/TaskBox';
import TaskForm from '../containers/TaskForm';
import SideBar from '../containers/SideBar';
import { createTask } from '../actions';

const TaskApp = () => {
  return (
  <div>
    <SideBar />
    <div className="main-panel" >
      <TaskForm onSubmit={createTask} />
      <TaskBox />
    </div>
  </div>
)};

export default TaskApp;