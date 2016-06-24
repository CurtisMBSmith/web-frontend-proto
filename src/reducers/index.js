import { combineReducers } from 'redux';
// import { login, logout } from './Login';
import taskList from './Task';

const app = combineReducers({
  // login,
  // logout,
  taskList
});

export default app;
