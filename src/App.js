import React, { useEffect, useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projec/Projects';
import Skill from './components/Skill/Skill';
import User from './components/User/User';
import { fetchData } from './api';

function App() {

  const [data, setData] = useState()

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
    fetchDataFromApi()
  }, [])

  const tabs = [
    {
      title: 'Experiencia',
      content: <Experience props={data?.experiences}></Experience>,
    },
    {
      title: 'Educacion',
      content: <Education props={data?.educations}></Education>,
    },
    {
      title: 'Proyecto',
      content: <Projects props={data?.projects}></Projects>,
    },
    {
      title: 'Skill',
      content: <Skill props={data?.skills}></Skill>,
    },
  ];

  return (
    <div className="App">
      {
        data ?
        <div> 
        <img className='banner' src='/baner.jpg' alt='baner'/>
        <User props={data}></User>
        <Tabs tabs={tabs} />
        </div>
        :
        <h1>Cargando</h1>
      }
    </div>
  );
}

export default App;