import { Element } from 'react-scroll'
import { projects } from './data'
import "../styling/projects.css"

const Projects = () => {
    const displayData = projects.map(project => {
        return <div className='col-3 card text-white bg-dark'><img src={project.image} className="card-img-top rounded" alt={project.name}/><div className="card-body"><h5 className="card-title">{project.name}</h5><p className="card-text">{project.description.substring(0, 120)}...</p></div><div className="card-footer"><a href= {project.link} className="btn btn-success">{project.name}</a></div></div>
    })

    // const scrollCards = (scrollOffset) => {
    //     const container = document.getElementById('cardContainer');
    //     container.scrollLeft += scrollOffset;
    //   };
    
    return(
        <Element name="projects">
            <h3 class="text-center mb-3 text-uppercase">My Projects</h3>
            <div className="container-fluid">
                <div className="row flex-nowrap overflow-auto" id="cardContainer" >
                    {displayData}
                    {/* <div className='buttons'>
                        <button className="btn btn-primary mr-2" onClick={() => scrollCards(-100)}>
                            Scroll Left
                        </button>
                        <button className="btn btn-primary next" onClick={() => scrollCards(100)}>
                            Scroll Right
                        </button>
                    </div> */}
                </div>
            </div>
        </Element>

    )

}

export default Projects