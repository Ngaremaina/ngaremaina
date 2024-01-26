import { Element } from "react-scroll";

const About = () => {
    return(
            <Element name="about" className="about">
            <div className="container">
                <div className="section-title">
                <h2>About</h2>
                <p>Results-driven Software Developer with a proven track record of successfully managing software projects and teams. Possesses a deep understanding of software development principles and practices and a strong ability to align technology solutions with business goals. Experienced in leading cross-functional teams to deliver high-quality software on time and within budget. Adept at fostering collaboration, driving innovation, and ensuring efficient project execution.</p>
                </div>
                <div className="row">
                <div className="col-lg-4">
                    <img src="assets/img/ngare.jpg" className="img-fluid" alt = "ngare" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Software Developer &amp; Software Engineer.</h3>
                    <p className="fst-italic">
                    I greatly like coding and software development as a source of personal pleasure and fulfillment.
                    </p>
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span><a href="https://owenmaina.netlify.app/">Owen Maina</a></span></li>
                            <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Nairobi Kenya</span></li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Bachelors of Science in IT</span></li>
                            <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span><a href="mailto:mainaowen1997@gmail.com">Owen Maina</a></span></li>
                        </ul>
                    </div>
                    </div>
                    <p>
                    My focus is on developing software and I have experience operating software development teams and projects successfully. My proficiency lies in aligning technology solutions with corporate objectives coupled with my profound knowledge of the software development methods. To deliver top-notch software on time and within budget, I am capable of leading interdisciplinary teams. I know how to foster innovation, support teamwork, and ensure that projects are carried out successfully.
                    </p>
                </div>
                </div>
            </div>
            </Element>

        
    )

}

export default About