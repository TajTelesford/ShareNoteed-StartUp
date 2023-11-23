import './App.css';
import React, { useState } from 'react';

//components
import NavBar from './NavBarComponents/NavBar';
import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';



function Home() {

  const [ showCourseComponents, setShowCourseComponents ] = useState(true);

  return (
    <div>
      <NavBar />
      <CreateCourse toggle={setShowCourseComponents} />
      {
       showCourseComponents ? <Courses /> : null
      }
      
    </div>
  );
}

export default Home;
