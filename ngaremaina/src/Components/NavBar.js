import { Link as ScrollLink} from 'react-scroll';
import "../styling/navbar.css"
const NavBar = () => {
    return(
        <div className="container-fluid text-white">
            <nav className="nav-bar mb-3">
                <div className="nav justify-content-end">
                    <ScrollLink class="nav-link" to="home" spy={true} smooth={true} offset={-70} duration={800}>
                        Home
                    </ScrollLink>
                    <ScrollLink class="nav-link" to="about" spy={true} smooth={true} offset={-70} duration={800}>
                        About
                    </ScrollLink>
                    <ScrollLink class="nav-link" to="background" spy={true} smooth={true} offset={-70} duration={800}>
                        My Background
                    </ScrollLink>
                    <ScrollLink class="nav-link" to="projects" spy={true} smooth={true} offset={-70} duration={800}>
                        My Projects
                    </ScrollLink>
                    <ScrollLink class="nav-link" to="contacts" spy={true} smooth={true} offset={-70} duration={800}>
                        Contacts
                    </ScrollLink>
                </div>
            </nav>
        </div>
    )

}
export default NavBar
