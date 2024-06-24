import React from 'react'
import NavBar from './Components/NavBar/Navbar'
import HeroPage from './Components/Hero/HeroPage';
import About from './Components/About/About'
import Achievements from './Components/Achievements/Achievements'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <About/>
      <Achievements/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
