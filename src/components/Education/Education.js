import React from 'react'
import fecha from '../../utils/fecha.js'
import capitalLeter from '../../utils/capitalLeters';
import './Education.css'

const Education = ({props}) => {
  return (
    <div>
      {props.map((prop) =>
        <div className='card-edu-container'>
            <h1>{capitalLeter(prop.name)}</h1>
          <div key={prop._id} className='info-edu'>
            <div className='container-edu'>
              <img className='img-edu' src={prop.photo} alt='photoexp' />
            </div>
            <div className='container-edu data-edu'>
              <div>{capitalLeter(prop.description)}</div>
              <div>Finalizado: {fecha(prop.finaldate)}</div> 
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Education