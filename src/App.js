import "./App.css"
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Home from './Components/Home';
import About from './Components/About';
import Background from './Components/Background';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import { useState } from "react";

function App() {
  const [isActive, setActive] = useState(false)
  const [className, setClassName] = useState(false)

  function handleNav(){
    setActive(!isActive)
    setClassName(!className)
  }
  
  return (
    <div className={className ? 'mobile-nav-active':''}>
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
      <a href="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </div>
  );
}

export default App;
