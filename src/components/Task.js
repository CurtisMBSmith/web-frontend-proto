import React, { Component, PropTypes } from 'react';

export default class Task extends Component {

  constructor(props) {
    super(props);
  }

  toggleTask(complete) {
    this.props.onTaskToggle(this.props.id, complete);
  }

  render() {
    let desc, complete;
    return (
      <div className="task" >
          <input type="text" value={this.props.description} className="taskDesc" style={{ textDecoration: this.props.completed ? 'line-through' : 'none' }}
              ref={node => desc = node} onChange={e => {
                e.preventDefault();
                if (desc.value !== this.props.description) {
                  this.props.onDescUpdated(this.props.id, desc.value)
                }
              }}/>
          <input type="checkbox" value={this.props.completed} ref={node => complete = node}
              onClick={e => this.toggleTask(complete.checked)} />
      </div>
    )
  }
}


Task.propTypes = {
  onTaskToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
}
