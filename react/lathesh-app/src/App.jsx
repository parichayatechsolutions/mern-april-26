import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About_me/About_me'
import About_content from './components/About_content/About_content'
import My_creation from './components/My_creation/My_creation'
import My_toolbox from './components/My_toolbox/My_toolbox'
import Toolbox_content from './components/Toolbox_content/Toolbox_content'
import My_journey from './components/My_journey/My_journey'
import Journey_content from './components/Journey_content/Journey_content'
import Lets_create_together from './components/Lets_create_together/Lets_create_together'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import Creation_content from './components/Creation_content/Creation_content'

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <About_content />
      <My_creation />
      <Creation_content />
      <My_toolbox />
      <Toolbox_content />
      <My_journey />
      <Journey_content />
      <Lets_create_together />
      <Form />
      <Footer />
    </>
  )
}

export default App;
