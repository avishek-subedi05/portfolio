
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Fotter/Fotter'

import Hero from './components/Hero/Hero'
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar'
import ProjectsPage from './components/ProjectPage/ProjectsPage'

function App() {


  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>


      <section id="about">
        <About />
      </section>

      <section id='projects'><
        ProjectsPage />
        </section>

      <section id='contact'>  
        <Contact />
        </section>



      <Footer />
    </>
  )
}

export default App
