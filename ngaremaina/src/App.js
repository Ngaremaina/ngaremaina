import './App.css';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Background from './Components/Background';


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Background/>
      <Projects />
      <Footer/>
  </div>
  );
}

export default App;
