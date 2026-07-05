import { useState } from "react";
import { Element } from "react-scroll";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
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

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.name} className="h-120 w-full flex-shrink-0 px-2">
                <div className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-surface sm:flex-row">
                  <img
                    className="h-56 w-full flex-shrink-0 object-cover sm:h-full sm:w-1/2"
                    src={project.image}
                    alt={project.name}
                  />
                  <div className="flex flex-1 flex-col overflow-hidden p-5">
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-white">{project.name}</h3>
                    <p className="mb-4 line-clamp-4 flex-1 text-sm text-light/70">
                      {project.description}
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
        </div>

        <button
          type="button"
          aria-label="Previous project"
          onClick={() => goTo(current - 1)}
          className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent p-3 text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/40"
        >
          <IconChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={() => goTo(current + 1)}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent p-3 text-white shadow-lg transition hover:bg-accent-hover focus:outline-none focus:ring-4 focus:ring-accent/40"
        >
          <IconChevronRight size={20} />
        </button>

        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          {projects.map((project, index) => (
            <span
              key={project.name}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current ? "bg-accent" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
