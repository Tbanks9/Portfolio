import React from 'react'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {

  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main >
  )
}

export default App
