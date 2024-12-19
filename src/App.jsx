import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Home } from '../src/components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { ContactMe } from './components/ContactMe'
import { Footer } from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col'>
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </div>)
}

export default App
