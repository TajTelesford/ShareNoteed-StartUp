import './App.css';
import React, { useState } from 'react';

//components
import NavBar from './NavBarComponents/NavBar';
import Courses from './components/Courses';



function Home() {
  return (
    <div>
      <NavBar />
      <Courses />
    </div>
  );
}

export default Home;
