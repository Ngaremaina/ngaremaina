import { Link as ScrollLink, Element} from 'react-scroll';
import "../styling/footer.css"
const Footer =() => {
    return(
        <Element name="contact">
            <footer className="page-footer font-small text-white mt-5">
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Introduction</h5>
                            <ul className="list-unstyled">   
                                <li>
                                    <h6>Owen Maina</h6>
                                </li>
                                <li>
                                    <h6>Software Developer</h6>
                                </li>
                                <li>
                                    <h6>Full-Stack Developer</h6>
                                </li>
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Social</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a className='link-opacity-25-hover' href="mailto:mainaowen1997@gmail.com"><i class="fa fa-envelope"></i> Gmail</a>
                                </li>
                                <li>
                                    <a className='link-opacity-25-hover' href="https://www.linkedin.com/in/owen-ngare-maina/"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                                </li>
                                <li>
                                    <a className='link-opacity-25-hover' href="https://github.com/Ngaremaina"><i class="fa fa-github"></i> Github</a>
                                </li> 
                                <li>
                                    <a className='link-opacity-25-hover' href='www.google.com'><i class="fa-brands fa-hackerrank"></i> Hackerrank</a>
                                </li>                      
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none"/>
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Street Address</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <h6>P.O Box 953-00520</h6>
                                </li>
                                <li>
                                    <h6>Skyview Court</h6>
                                </li>
                                <li>
                                    <h6>Utawala, Embakasi East</h6>
                                </li>
                                <li>
                                    <h6>Nairobi, Kenya</h6>
                                </li>
                                
                            </ul>
                        </div>

                        <hr className="clearfix w-100 d-md-none"/>         
               
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <ScrollLink className='link-opacity-25-hover' to="home" spy={true} smooth={true} offset={-70} duration={800}>
                                        Home
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink className='link-opacity-25-hover' to="about" spy={true} smooth={true} offset={-70} duration={800}>
                                        About
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink className='link-opacity-25-hover' to="background" spy={true} smooth={true} offset={-70} duration={800}>
                                        My Background
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink className='link-opacity-25-hover' to="projects" spy={true} smooth={true} offset={-70} duration={800}>
                                        My Projects
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink className='link-opacity-25-hover' to="contacts" spy={true} smooth={true} offset={-70} duration={800}>
                                        Contacts
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> 
        </Element>
    )

}

export default Footer