import React from 'react';
import TaskBox from '../containers/TaskBox';
import TaskForm from '../containers/TaskForm';
import { createTask } from '../actions';

const App = () => (
  <div>
    <TaskForm onSubmit={createTask} />
    <TaskBox />
  </div>
);

export default App;