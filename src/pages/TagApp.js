import React from 'react';
import SideBar from './../containers/SideBar';
import Tag from '../components/Tag';
import { createTask } from '../actions';

const TagApp = () => {
  let name = 'Tag1';
  return (
  <div >
    <SideBar />
    <div className="main-panel">
      <Tag name= { name }/>
    </div>
  </div>
)};

export default TagApp;