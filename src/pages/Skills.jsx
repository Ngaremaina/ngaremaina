import { Element } from "react-scroll";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <Element name="skills" className="py-12">
      <h2 className="section-heading">Skills</h2>

      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-semibold uppercase tracking-wide text-white">
                {skill.name}
              </span>
              <span className="text-sm text-muted">{skill.level}%</span>
            </div>
            <div
              className="h-2.5 w-full rounded-full bg-white/10"
              role="progressbar"
              aria-label={skill.name}
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-2.5 rounded-full bg-accent transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Skills;
