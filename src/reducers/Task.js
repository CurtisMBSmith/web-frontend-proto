import { CREATE_TASK, TOGGLE_COMPLETE, UPDATE_TASK_DESC } from '../constants/actions/TaskActionTypes';

const task = (state, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        id: action.id,
        description: action.description,
        completed: false
      };
    case TOGGLE_COMPLETE:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: action.completed
      });
    case UPDATE_TASK_DESC:
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        description: action.description
      });
    default:
      return state;
  }
};

const taskList = (state = [], action) => {
  switch (action.type) {
    case CREATE_TASK:
      return [
        ...state,
        task(undefined, action)
      ];
    case TOGGLE_COMPLETE:
    case UPDATE_TASK_DESC:
      return state.map(t => task(t, action));
    default:
      return state;
  }
};

export default taskList;