import React from 'react'
import fecha from '../../utils/fecha'
import capitalLeter from '../../utils/capitalLeters';
import './Experience.css'

const Experience = ({ props }) => {
  return (
    <div>
      {props.map((prop) =>
        <div className='card-exp-container'>
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
        </div>
      )}
    </div>
  )
}

export default Experience