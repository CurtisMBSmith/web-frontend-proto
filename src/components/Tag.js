import React, { Component, PropTypes } from 'react';

export default class Tag extends Component {

  constructor(props) {
    super(props);
  }

  toggleTask(complete) {
    this.props.onTaskToggle(this.props.id, complete);
  }

  render() {
    return (
      <div className="tag" >
        <p className="name" >
          { this.props.name }
        </p>
      </div>
    )
  }
}


Tag.propTypes = {
  name: PropTypes.string.isRequired,
  // completed: PropTypes.bool.isRequired,
  // description: PropTypes.string.isRequired
}
