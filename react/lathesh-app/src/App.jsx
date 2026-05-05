import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header/Header'
import Row3 from './components/Homepage/Row3/Row3'
import Row4 from './components/About_content/Row4'
import Row5 from './components/My_creation/Row5'
import Row6 from './components/Creation_content/Row6'
import Row7 from './components/My_toolbox/Row7'
import Row8 from './components/Toolbox_content/Row8'
import Row9 from './components/My_journey/Row9'
import Row10 from './components/Journey_content/Row10'
import Row11 from './components/Lets_create_together/Row11'
import Row12 from './components/Form/Row12'
import Row13 from './components/Footer/Row13'
import Row2 from './components/Homepage/Row2'

function App() {

  return (
    <>
      <Header />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
      <Row13 />
    </>
  )
}

export default App;
