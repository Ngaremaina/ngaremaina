import "./App.css"
import NavBar from './components/Header';
import Projects from './pages/Projects';
import Home from './pages/Home';
import About from './pages/About';
import Background from './pages/Background';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [isActive, setActive] = useState(false)
  const [className, setClassName] = useState(false)

  function handleNav(){
    setActive(!isActive)
    setClassName(!className)
  }
  
  return (
    <div className={className ? 'mobile-nav-active':''}>
    <Analytics/>
      <i className={`d-xl-none bi mobile-nav-toggle ${isActive ? 'bi-x' : 'bi-list'}`} onClick={handleNav}/>
      <NavBar/>
      <main id = 'main'>
        <Home/>
        <About/>
        <Projects/>
        <Skills/>
        <Background/>
        <Contact/>
      </main>
      {/* <a href="www.google.com" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a> */}

      <a href="google.com" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </div>
  );
}

export default App;
