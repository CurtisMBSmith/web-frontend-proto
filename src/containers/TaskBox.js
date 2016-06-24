import { connect } from 'react-redux';
import TaskList from '../components/TaskList';
import { toggleComplete, updateTaskDesc } from '../actions';

const mapStateToProps = (state) => {
  return {
    tasks: state.taskList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskToggle: (id, completed) => {
      dispatch(toggleComplete(id, completed));
    },
    onDescUpdate: (id, desc) => {
      dispatch(updateTaskDesc(id, desc));
    }
  };
};

const TaskBox = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);

export default TaskBox;