import { CREATE_TASK, TOGGLE_COMPLETE, UPDATE_TASK_DESC } from '../constants/actions/TaskActionTypes';
import { LOGIN_USER, LOGOUT_USER } from '../constants/actions/LoginActionTypes';

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

export const logIn = (authToken, email) => {
  return {
    type: LOGIN_USER,
    authToken,
    email
  };
};

export const logOut = (authToken) => {
  return {
    type: LOGOUT_USER,
    authToken
  };
};
