import React, { PropTypes } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskToggle, onDescUpdate }) => (
  <div className="taskList" >
    {
      tasks.map(task =>
        <Task key={task.id} {...task} onTaskToggle={onTaskToggle}
            onDescUpdated={onDescUpdate} />
      )
    }
  </div>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTaskToggle: PropTypes.func.isRequired
}

export default TaskList;