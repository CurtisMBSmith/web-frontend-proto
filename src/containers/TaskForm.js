import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../actions';

let TaskForm = ({ dispatch }) => {
  let input;
  return (
    <form className="taskForm" onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(createTask(input.value))
      input.value = ''
    }}>
      <input type="text" placeholder="Enter task description" ref={node => {
        input = node
      }}/>
      <button type="submit" >Create</button>
   </form>
  );
};
TaskForm = connect()(TaskForm);

export default TaskForm;