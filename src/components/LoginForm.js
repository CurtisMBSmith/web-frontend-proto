import React from 'react';
// import { connect } from 'react-redux';

const LoginForm = ({ onLogIn }) => {
  let email, password;
  return (
    <div className="loginForm" >
      <input type="email" placeholder="Enter email address" ref={node => {
        email = node
      }} required/>
      <input type="password" placeholder="hunter2" ref={node => {
        password = node
      }} required/>
      <button type="button" onClick={e => {
      if (!email.value.trim()) {
        return
      }
      onLogIn("authToken", email.value);
    }}>Log In</button>
      <button type="button" >Forgot Password?</button>
   </div>
  );
};

export default LoginForm;