import React from 'react'
import capitalLeter from '../../utils/capitalLeters'
import './Projects.css'

const Projects = ({props}) => {
  return (
    <div>
      {props.map((prop) =>
        <div className='card-pro-container'>
            <h1>{capitalLeter(prop.name)}</h1>
          <div key={prop._id} className='info-pro'>
            <div className='container-pro'>
              <img className='img-pro' src={prop.photo} alt='photoexp' />
            </div>
            <div className='container-pro data-pro'>
              <div>{capitalLeter(prop.description)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects