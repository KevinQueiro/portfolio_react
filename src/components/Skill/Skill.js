import React, { useState } from 'react'
import capitalLeter from '../../utils/capitalLeters';
import generarColor from '../../utils/colors';
import SkillForm from './SkillForm/SkillForm';
import NewForm from './SkillForm/Forms/NewForm';
import './Skill.css'

const Skill = ({ props }) => {

  const [isNew, setIsNew] = useState(false);

  const toggleDropdown = (e) => {
    setIsNew(!isNew);
  };

  return (
    <div>
      {props.data.map((prop, _id) => (
        <div className='mainSkill'  key={prop._id}>
          {capitalLeter(prop.name)} <div className='progress-bar-container' key={_id}>
            <div className='progress-bar' style={{ width: `${prop.percentage}%`, 'background-color': `${generarColor()}` }}></div>
          </div>
          <SkillForm props={{ data: prop, userId: props.userId, forRefresh: props.forRefresh }} />
        </div>
      ))}
      <button className="dropdown-button" name='new' onClick={toggleDropdown}>
        Nuevo
      </button>
      {isNew && (
        <NewForm props={{ userId: props.userId, wath: 'skill', forRefresh: props.forRefresh, forClose: toggleDropdown }} />
      )}
    </div>
  );
}

export default Skill