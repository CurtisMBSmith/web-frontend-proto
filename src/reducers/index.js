import { combineReducers } from 'redux';
import { auth } from './Login';
import taskList from './Task';

const app = combineReducers({
  auth,
  taskList
});

export default app;
