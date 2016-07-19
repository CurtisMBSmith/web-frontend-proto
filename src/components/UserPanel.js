import React, { Component, PropTypes } from 'react';

export default class UserPanel extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userPanel" >
        <p>Welcome {this.props.email}!</p>
        <a href="#" onClick={(e) => {
          this.props.onLogOut(this.props.authToken);
          e.preventDefault();
        }}>Logout</a>
      </div>
    )
  }
}


UserPanel.propTypes = {
  email: PropTypes.string.isRequired,
}
