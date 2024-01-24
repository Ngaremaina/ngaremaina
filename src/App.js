import "./App.css"
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Home from './Components/Home';
import About from './Components/About';
import Background from './Components/Background';
import Contact from './Components/Contact';
import Skills from './Components/Skills';


function App() {
  return (
    <main id = "main">
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Background/>
      <Contact/>
      <a href="/" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

    </main>
  );
}

export default App;
