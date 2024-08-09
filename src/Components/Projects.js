import { Element } from 'react-scroll'
import { projects } from './data'

const Projects = () => {
    const displayProjects = projects.map((project) => {
        return <div className="max-w-sm alternate-background rounded-lg">
            <img className="rounded-t-lg w-full h-1/2" src={project.image} alt ={project.name}/>
            <div className="p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description.substring(0, 80)}...</p>
                <a href={project.link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {project.name}
                <i className="fa-solid fa-arrow-right pl-2"></i>
                </a>
            </div>
            </div>

        

    })
    return(
        
        <Element name="projects" className="">
        <div className="p-2">
            <div className="text-white mb-3">
                <h2 className='font-bold text-4xl'>Personal Projects</h2>
                <p>Welcome to my web page, where innovation meets functionality! I am the creator behind these exciting projects that aim to enhance your digital experience.</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
                {displayProjects}
            </div>

        </div>
        </Element>

    )


    

}

export default Projects