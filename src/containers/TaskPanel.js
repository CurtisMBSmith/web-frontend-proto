import React from 'react';
import TaskForm from './TaskForm';
import TaskBox from './TaskBox';

const TaskPanel = () => (
  <div className="taskPanel" >
    <TaskForm />
    <TaskBox />
  </div>
);

export default TaskPanel;