import { Element } from "react-scroll";
import { projects } from "../data/data";

const Projects = () => {
  return (
    <Element name="projects" className="py-12">
      <h2 className="section-heading">Personal Projects</h2>
      <p className="mb-8 max-w-4xl text-light/90">
        Welcome to my web page, where innovation meets functionality! I am the creator behind these
        exciting projects that aim to enhance your digital experience.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col overflow-hidden rounded-lg bg-surface">
            <img
              className="h-48 w-full object-cover"
              src={project.image}
              alt={project.name}
            />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-white">{project.name}</h3>
              <p className="mb-4 flex-1 text-sm text-light/70">
                {project.description.substring(0, 80)}...
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="btn-primary self-start"
              >
                {project.name}
                <i className="fa-solid fa-arrow-right pl-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Projects;
