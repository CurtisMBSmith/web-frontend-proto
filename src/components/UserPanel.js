import React, { Component, PropTypes } from 'react';

export default class UserPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userPanel" >
        <p>Welcome {this.props.email}!</p>
        <a href="#" onClick={() => this.props.onLogOut(this.props.authToken)}>Logout</a>
      </div>
    )
  }
}


UserPanel.propTypes = {
  email: PropTypes.string.isRequired,
}
