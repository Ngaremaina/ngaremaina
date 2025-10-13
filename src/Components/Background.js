import { Element } from "react-scroll";
import { experience, education, certifications } from "./data";


const Background = () => {    
    const displayExperience = experience.map((item) => {
        return  <div className="background-item">
        <h4>{item.title}</h4>
        <h5>{item.date}</h5>
        <p><em>{item.company}</em></p>
        <ul>{item.roles.map((role)=>{
            return <li>{role}</li>
        })}
        </ul>
        </div>
    })

    const displayEducation = education.map(item => {
        return <div className="background-item">
        <h4>{item.title}</h4>
        <h5>{item.date}</h5>
        <p><em>{item.school}</em></p>
        <p>{item.description}</p>
        </div>
    })

    const displayCertifications = certifications.map(item => {
        return <div className="background-item">
        <h4>{item.title}</h4>
        <h5>{item.date}</h5>
        <p><em>{item.school}</em></p>
        </div>
    })
    return(
            <Element name="background" className="background">
            <div className="container mb-3">
                <div className="section-title">
                <h2>My Background</h2>
                <p>Experienced Software Developer focused on achieving tangible outcomes, showcasing a demonstrated history of effectively overseeing software projects and teams. Exhibits a profound comprehension of software development principles and methodologies, with a robust capacity to synchronize technological solutions with organizational objectives. Skilled in guiding cross-functional teams to achieve the timely and budget-friendly delivery of top-notch software. Proficient in fostering teamwork, promoting innovation, and ensuring streamlined project implementation.</p>
                </div>
                <div className="row">
                <div className="col-lg-6">
                    <h3 className="background-title">Summary</h3>
                    <div className="background-item pb-0">
                    <h4>Owen Maina</h4>
                    <p><em>Results-oriented Software Developer with a successful track record in project and team management, demonstrating a deep understanding of software development principles. Experienced in leading cross-functional teams to deliver high-quality software on time and within budget, adept at fostering collaboration and driving innovation.</em></p>
                    
                    </div>
                    <h3 className="background-title">Education</h3>
                    {displayEducation}
                    <h3 className="background-title">Certifications</h3>
                    {displayCertifications}
                </div>
                <div className="col-lg-6">
                    <h3 className="background-title">Internship Experience</h3>
                    {displayExperience}                    
                </div>
                
                </div>
            </div>
            </Element>
    )

}

export default Background