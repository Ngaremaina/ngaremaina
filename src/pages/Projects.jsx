import { useState } from "react";
import { Element } from "react-scroll";
import { projects } from "../data/data";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    setCurrent((index + projects.length) % projects.length);
  };

  return (
    <Element name="projects" className="py-12">
      <h2 className="section-heading">Personal Projects</h2>
      <p className="mb-8 max-w-4xl text-light/90">
        Welcome to my web page, where innovation meets functionality! I am the creator behind these
        exciting projects that aim to enhance your digital experience.
      </p>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.name} className="w-full flex-shrink-0 px-2">
              <div className="flex flex-col overflow-hidden rounded-lg bg-surface sm:flex-row">
                <img
                  className="h-64 w-full object-cover sm:h-auto sm:w-1/2"
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
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous project"
          onClick={() => goTo(current - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-white hover:bg-surface"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => goTo(current + 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-surface/80 p-2 text-white hover:bg-surface"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>

        <div className="mt-4 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              aria-label={`Go to ${project.name}`}
              onClick={() => goTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
