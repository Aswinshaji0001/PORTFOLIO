import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Nav'
import AboutMe from './Components/Aboutme'
import Skills from './Components/Skills'
import Works from './Components/Works'
import Contact from './Components/Contact'
import Education from './Components/Education'
function App() {

  return (
    <>
          <Navbar></Navbar>
          <AboutMe></AboutMe>
          <Skills></Skills>
          <Education></Education>
          <Works></Works>
          <Contact></Contact>
    </>
  )
}

export default App
