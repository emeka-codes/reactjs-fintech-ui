import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Mynavbar.jsx';
import Hero from './Hero.jsx';
import logo from './assets/AceBankLogo.png';
import heroImage from './assets/AceBankHeroPhoto.png';

function App(){
  return (
    <>
      <Navbar img={logo} />
      <Hero img={heroImage} />
    </>
  );
}

export default App;
