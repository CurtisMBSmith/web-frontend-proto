import React from 'react';
import { Link } from 'react-router';

const SideBar = () => (
  <nav role="navigation" id="leftNav">
    <ul className="sideBar" >
      <li><Link to="/tasks">TaskBox</Link></li>
      <li><Link to="/auth">LoginForm</Link></li>
      <p></p>
    </ul>
  </nav>
);

export default SideBar;