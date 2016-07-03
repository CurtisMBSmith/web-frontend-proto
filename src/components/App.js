import React from 'react';
import TaskBox from '../containers/TaskBox';
import TaskForm from '../containers/TaskForm';
import UserBox from '../containers/UserBox';
import { createTask } from '../actions';

const App = (logged_in) => {
  return (
  <div>
    <UserBox />
    <TaskForm onSubmit={createTask} />
    <TaskBox />
  </div>
)};

export default App;