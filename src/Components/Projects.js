import { Element } from 'react-scroll'
import { projects } from './data'

const Projects = () => {
    const displayProjects = projects.map((project) => {
        return <div className='col-lg-4 col-md-6 projects-item'><div className="projects-wrap"><img src={project.image} className="img-fluid" style={{height:'300px'}} alt = {project.name} /><div className="projects-links"><a href={project.image} data-gallery="projectsGallery" className="projects-lightbox" title={project.name}><i className="bx bx-plus" /></a><a href={project.link} title="More Details"><i className="bx bx-link" /></a></div></div></div>

    })
    return(
        
        <Element name="projects" className="projects section-bg">
        <div className="container">
            <div className="section-title">
            <h2>Personal Projects</h2>
            <p>Welcome to my web page, where innovation meets functionality! I am the creator behind these exciting projects that aim to enhance your digital experience.</p>
            </div>
            {/* <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="projects-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
                </ul>
            </div>
            </div> */}
            <div className="row projects-container" data-aos="fade-up" data-aos-delay={100}>
                {displayProjects}
            </div>
        </div>
        </Element>

    )


    

}

export default Projects