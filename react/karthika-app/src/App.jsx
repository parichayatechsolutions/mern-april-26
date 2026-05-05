import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Head from './components/Head/Head'
import Intro from './components/Head/Intro/Intro'
import About from './components/Head/About/About'
import Project from './components/Head/Project/Project'
import Skill from './components/Skill/Skill'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <Head/>
      <Intro/>
      <About/>
      <Project/>
      <Skill/>
      <Experience/>
      <Contact/>
    </>
  )

}
export default App


