import { CREATE_TASK, TOGGLE_COMPLETE, UPDATE_TASK_DESC } from '../constants/actions/TaskActionTypes';

let nextTaskId = 0;

export const createTask = (description) => {
  return {
    type: CREATE_TASK,
    id: nextTaskId++,
    description
  };
};

export const toggleComplete = (id, completed) => {
  return {
    type: TOGGLE_COMPLETE,
    id,
    completed
  };
};

export const updateTaskDesc = (id, description) => {
  return {
    type: UPDATE_TASK_DESC,
    id,
    description
  };
};