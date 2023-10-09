import React, { useState } from 'react';
import capitalLeter from '../../utils/capitalLeters';
import ProjectForm from './ProjecForm/ProjecForm';
import NewForm from './ProjecForm/Forms/NewForm';

import './Projects.css'

const Projects = ({ props }) => {

  const [isNew, setIsNew] = useState(false);

  const toggleDropdown = (e) => {
    setIsNew(!isNew);
  };

  return (
    <div>
      {props.data.map((prop) =>
        <div className='card-pro-container' key={prop._id}>
          <h1>{capitalLeter(prop.name)}</h1>
          <div key={prop._id} className='info-pro'>
            <div className='container-pro'>
              <img className='img-pro' src={prop.photo} alt='photoexp' />
            </div>
            <div className='container-pro data-pro'>
              <div>{capitalLeter(prop.description)}</div>
            </div>
          </div>
          <ProjectForm props={{ data: prop, userId: props.userId, forRefresh: props.forRefresh }} />
        </div>
      )}
      <button className="dropdown-button" name='new' onClick={toggleDropdown}>
        Nuevo
      </button>
      {isNew && (
        <NewForm props={{ userId: props.userId, wath: 'project', forRefresh: props.forRefresh, forClose: toggleDropdown }} />
      )}
    </div>
  )
}

export default Projects