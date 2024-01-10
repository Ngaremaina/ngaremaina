import { Element } from 'react-scroll'
import { projects } from './data'
const Projects = () => {
    const displayData = projects.map(project => {
        return <div><p>{project.name}</p><p>{project.description}</p><a href={project.link}>{project.name}</a></div>
    })
    
    return(
        <Element name="projects">
            <div>
                {displayData}
            </div>
        </Element>

    )

}

export default Projects