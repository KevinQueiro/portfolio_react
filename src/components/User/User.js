import React from 'react'
import capitalLeter from '../../utils/capitalLeters.js'
import fecha from '../../utils/fecha.js'
import './User.css'

const User = ({ props }) => {

  const handleImageError = (event) => {
    event.target.src = '/defaultAvatar.png';
  };

  return (
    <div className='userInfo'>
      <div className='img-container'>
        <div className='avatar-container'>
          <img className='avatar' src={props.photo || '/defaultAvatar.png'} alt='portrait' onError={handleImageError}/>
        </div>
      </div>
      <div className='info-container row'>
        <div className='each-info'>
          Nombre:
          <div>{capitalLeter(props.name)} {capitalLeter(props.lastname)}</div>
        </div>
        <div className='each-info'>
          Titulo:
          <div>{capitalLeter(props.title)}</div>
        </div>
        <div className='each-info'>
          Fecha de Nacimiento:
          <div>{fecha(props.birthdate)}</div>
        </div>
        <div className='each-info'>
          Residencia:
          <div>Tigre, Buenos Aires, Argentina</div>
        </div>
      </div>
    </div>
  )
}

export default User