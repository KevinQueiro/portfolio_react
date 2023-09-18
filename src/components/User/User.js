import React from 'react'
import capitalLeter from '../../utils/capitalLeters.js'
import fecha from '../../utils/fecha.js'
import './User.css'

const User = ({ props }) => {
  return (
    <div className='userInfo'>
      <div className='img-container'>
        <div className='avatar-container'>
          <img className='avatar' src={props.photo} alt='portrait' />
        </div>
      </div>
      <div className='info-container row'>
        <div>
          Nombre:
          <div>{capitalLeter(props.name)} {capitalLeter(props.lastname)}</div>
        </div>
        <div>
          Titulo:
          <div>{capitalLeter(props.title)}</div>
        </div>
        <div>
          Fecha de Nacimiento:
          <div>{fecha(props.birthdate)}</div>
        </div>
        <div>
          Residencia:
          <div>Tigre, Buenos Aires, Argentina</div>
        </div>
      </div>
    </div>
  )
}

export default User