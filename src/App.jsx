
import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { Toaster } from 'react-hot-toast'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (pageRef) => {
    pageRef.current?.scrollIntoView({ behaviour: 'smooth' });

  }
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} handleScroll={handleScroll}  />
      <HomePage pageRef={homeRef} handleScroll={handleScroll} contactRef={contactRef}/>
      <AboutPage pageRef={aboutRef} />
      <ProjectPage pageRef={projectRef} />
      <ContactPage pageRef={contactRef} />
    </>
  )
}

export default App
