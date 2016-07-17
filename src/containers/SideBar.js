import React from 'react';

const SideBar = () => (
  <nav role="navigation" id="leftNav">
    <ul className="sideBar" >
      <li><a href="/tasks">TaskBox</a></li>
      <li><a href="/auth">LoginForm</a></li>
    </ul>
  </nav>
);

export default SideBar;