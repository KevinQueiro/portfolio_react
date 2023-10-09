import React, { useState } from 'react'
import fecha from '../../utils/fecha'
import capitalLeter from '../../utils/capitalLeters';
import ExperienceForm from './ExperienceForm/ExperienceForm';
import NewForm from './ExperienceForm/Forms/NewForm';

import './Experience.css'

const Experience = ({ props }) => {

  const [isNew, setIsNew] = useState(false);

  const toggleDropdown = (e) => {
    setIsNew(!isNew);
  };

  return (
    <div>
      {props.data.map((prop) =>
        <div className='card-exp-container' key={prop._id}>
          <h1>{capitalLeter(prop.name)}</h1>
          <div key={prop._id} className='info-exp'>
            <div className='container-exp'>
              <img className='img-exp' src={prop.photo} alt='photoexp' />
            </div>
            <div className='container-exp data-exp'>
              <div>{capitalLeter(prop.description)}</div>
              <div>Inicio: {fecha(prop.initdate)}</div>
              <div>Fin: {fecha(prop.finaldate)}</div>
            </div>
          </div>
          <ExperienceForm props={{ data: prop, userId: props.userId, forRefresh: props.forRefresh }} />
        </div>
      )}
      <button className="dropdown-button" name='new' onClick={toggleDropdown}>
        Nuevo
      </button>
      {isNew && (
        <NewForm props={{ userId: props.userId, wath: 'experience', forRefresh: props.forRefresh, forClose: toggleDropdown }} />
      )}
    </div>
  )
}

export default Experience