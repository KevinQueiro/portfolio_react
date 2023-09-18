import React from 'react'
import capitalLeter from '../../utils/capitalLeters';
import generarColor from '../../utils/colors';
import './Skill.css'

const Skill = ({ props }) => {
  return (
    <div>
      <h1>Habilidades</h1>
      {props.map((prop, _id) => (
        <div>
          {capitalLeter(prop.name)} <div className='progress-bar-container' key={_id}>
            <div className='progress-bar' style={{ width: `${prop.percentage}%`, 'background-color':`${generarColor()}` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skill