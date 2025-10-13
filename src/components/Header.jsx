import { Link as ScrollLink} from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
//   const [isActive, setActive] = useState(false)
//   const [className, setClassName] = useState('')

//   function handleNav(){
//     setActive(!isActive)
//     setClassName('mobile-nav-active')
//   }
  
    return(
      <div>
        {/* ======= Mobile nav toggle button ======= */}
        {/* <i className={`d-xl-none bi mobile-nav-toggle ${isActive ? 'bi-x' : 'bi-list'}`} onClick={handleNav}/> */}
        

        <header id="header">
            <div className="d-flex flex-column">
              <div className="profile">
                <img src="assets/img/ngare.jpg" alt='ngare' className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Owen Maina</a></h1>
                <div className="social-links mt-3 text-center">
                  <a href="mailto:mainaowen1997@gmail.com" className="envelope"><i className="bx bx-envelope" /></a>
                  <a href="https://github.com/Ngaremaina" className="github"><i className="bx bxl-github" /></a>
                  <a href="https://www.linkedin.com/in/owen-ngare-maina/" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
              <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><ScrollLink className="nav-link" to="home" spy={true} smooth={true} offset={-70} duration={800}>
                      <i className="bx bx-home" /> <span>Home</span>
                    </ScrollLink></li>
                    <li>
                    <ScrollLink className="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={800}>
                      <i className="bx bx-user" /> <span>About</span>
                    </ScrollLink>
                    </li>
                    <li>
                    <ScrollLink className="nav-link" to="projects" spy={true} smooth={true} offset={-70} duration={800}>
                    <i className="bx bx-briefcase" /> <span>Projects</span>
                    </ScrollLink>
                    </li>
                    <li>
                    <ScrollLink className="nav-link" to="skills" spy={true} smooth={true} offset={-70} duration={800}>
                    <i className="bx bi-gear-fill" /> <span>Skills</span>
                    </ScrollLink>
                    </li>
                    <li>
                    <ScrollLink className="nav-link" to="background" spy={true} smooth={true} offset={-70} duration={800}>
                      <i className="bx bi-clock-history" /> <span>Background</span>
                    </ScrollLink>
                    </li>
                    <li>
                    <ScrollLink className="nav-link" to="contact" spy={true} smooth={true} offset={-70} duration={800}>
                      <i className="bx bx-envelope" /> <span>Contact</span>
                    </ScrollLink>
                    </li>
                </ul>
              </nav>
            </div>
          </header>
      </div>
    )
}
export default NavBar
