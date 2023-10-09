import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projec/Projects';
import Skill from './components/Skill/Skill';
import User from './components/User/User';
import { fetchData } from './api';
import Comments from './components/Comments/Comments';

import './App.css';

function App() {

  const [data, setData] = useState()
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
        if(refresh){
          setRefresh(false)
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }
    fetchDataFromApi()
  }, [refresh])

  const forRefresh = () => {
    setRefresh(true)
  }

  const tabs = [
    {
      title: 'Experiencia',
      content: <Experience props={{data: data?.experiences, userId: data?._id, forRefresh}}></Experience>,
    },
    {
      title: 'Educacion',
      content: <Education props={{data: data?.educations, userId: data?._id, forRefresh}}></Education>,
    },
    {
      title: 'Proyecto',
      content: <Projects props={{data: data?.projects, userId: data?._id, forRefresh}}></Projects>,
    },
    {
      title: 'Skill',
      content: <Skill props={{data: data?.skills, userId: data?._id, forRefresh}}></Skill>,
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
      <Comments/>
    </div>
  );
}

export default App;