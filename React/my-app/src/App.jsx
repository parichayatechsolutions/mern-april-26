import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './component/Head/Header'
import Skill from './component/Skill/Skill'
import Experience from './component/Experience/Experience'
import Contact from './component/Contact/Contact'
import Home from './component/Home/Home'
import About from './component/About/About'

function App() {

  return (
    < >
      <Header/>
      <Home />
      <About/>
      <Skill />
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
