import { Element } from "react-scroll";
import { experience, education, certifications } from "../data/data";
import TimelineItem from "../components/TimelineItem";
import ItemDate from "../components/ItemDate";

const Background = () => {
  return (
    <Element name="background" className="py-12">
      <h2 className="section-heading">My Background</h2>
      <p className="mb-8 max-w-4xl text-light/90">
        Experienced Software Developer focused on achieving tangible outcomes, showcasing a demonstrated
        history of effectively overseeing software projects and teams. Exhibits a profound comprehension
        of software development principles and methodologies, with a robust capacity to synchronize
        technological solutions with organizational objectives. Skilled in guiding cross-functional teams
        to achieve the timely and budget-friendly delivery of top-notch software.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-bold text-white">Summary</h3>
          <TimelineItem>
            <h4 className="text-lg font-semibold uppercase text-white">Owen Maina</h4>
            <p className="italic text-light/80">
              Results-oriented Software Developer with a successful track record in project and team
              management, demonstrating a deep understanding of software development principles.
            </p>
          </TimelineItem>

          <h3 className="mb-4 mt-6 text-2xl font-bold text-white">Education</h3>
          {education.map((item) => (
            <TimelineItem key={item.title}>
              <h4 className="text-lg font-semibold uppercase text-white">{item.title}</h4>
              <ItemDate>{item.date}</ItemDate>
              <p className="italic text-light/80">{item.school}</p>
              <p className="text-light/90">{item.description}</p>
            </TimelineItem>
          ))}

          <h3 className="mb-4 mt-6 text-2xl font-bold text-white">Certifications</h3>
          {certifications.map((item) => (
            <TimelineItem key={item.title}>
              <h4 className="text-lg font-semibold uppercase text-white">{item.title}</h4>
              <ItemDate>{item.date}</ItemDate>
              <p className="italic text-light/80">{item.school}</p>
            </TimelineItem>
          ))}
        </div>

        <div>
          <h3 className="mb-4 text-2xl font-bold text-white">Internship Experience</h3>
          {experience.map((item) => (
            <TimelineItem key={item.title}>
              <h4 className="text-lg font-semibold uppercase text-white">{item.title}</h4>
              <ItemDate>{item.date}</ItemDate>
              <p className="italic text-light/80">{item.company}</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-light/90">
                {item.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </TimelineItem>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Background;
