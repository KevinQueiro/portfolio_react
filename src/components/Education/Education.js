import React, { useState } from 'react'
import fecha from '../../utils/fecha.js'
import capitalLeter from '../../utils/capitalLeters';
import EducationForm from './EducationForm/EducationForm.js';
import NewForm from './EducationForm/Forms/NewForm.js';

import './Education.css'

const Education = ({ props }) => {
  
  const [isNew, setIsNew] = useState(false);

  const toggleDropdown = (e) => {
    setIsNew(!isNew);
  };

  const handleImageError = (event) => {
    event.target.src = '/defaultImg.png';
  };

  return (
    <div>
      {props.data.map((prop) =>
        <div className='card-edu-container' key={prop._id}>
          <h1>{capitalLeter(prop.name)}</h1>
          <div className='info-edu'>
            <div className='container-edu'>
              <img className='img-edu' src={prop.photo || '/defaultImg.png'} alt='photoedu' onError={handleImageError} />
            </div>
            <div className='container-edu data-edu'>
              <div>{capitalLeter(prop.description)}</div>
              <div>● Finalizado: {fecha(prop.finaldate, 'año')}</div>
            </div>
          </div>
          <EducationForm props={{ data: prop, userId: props.userId, forRefresh: props.forRefresh }} />
        </div>
      )}
      <button className="dropdown-button" name='new' onClick={toggleDropdown}>
        Nuevo
      </button>
      {isNew && (
        <NewForm props={{ userId: props.userId, wath: 'education', forRefresh: props.forRefresh, forClose: toggleDropdown }} />
      )}
    </div>
  )
}

export default Education