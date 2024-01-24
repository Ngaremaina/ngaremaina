import { Link as ScrollLink} from 'react-scroll';
// import { useState } from 'react';

const NavBar = () => {
  // const [nav, setNav] = useState(false);

  // const handleNav = () => {
  //   setNav(!nav);
  // };
 
    return(
      <div>
        {/* ======= Mobile nav toggle button ======= */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none" />

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
