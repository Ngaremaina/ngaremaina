import { Element } from "react-scroll";
import { IconChevronRight } from "@tabler/icons-react";
import { details } from "../data/about";
import profile from '../assets/img/ngare.jpg'

const About = () => {
  return (
    <Element name="about" className="py-12">
      <h2 className="section-heading">About</h2>
      <p className="mb-8 max-w-4xl text-light/90">
        Results-driven Software Developer with a proven track record of successfully managing software
        projects and teams. Possesses a deep understanding of software development principles and
        practices and a strong ability to align technology solutions with business goals. Experienced
        in leading cross-functional teams to deliver high-quality software on time and within budget.
        Adept at fostering collaboration, driving innovation, and ensuring efficient project execution.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        <img
          src={profile}
          alt="Owen Maina"
          className="w-full rounded-lg object-cover md:col-span-1"
        />
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white">
            Software Developer &amp; Software Engineer.
          </h3>
          <p className="mt-2 italic text-light/80">
            I greatly like coding and software development as a source of personal pleasure and
            fulfillment.
          </p>

          <ul className="my-6 grid gap-3 sm:grid-cols-2">
            {details.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-light/90">
                <IconChevronRight size={16} className="shrink-0 text-accent" />
                <strong className="text-white">{item.label}:</strong>
                {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
              </li>
            ))}
          </ul>

          <p className="text-light/90">
            My focus is on developing software and I have experience operating software development
            teams and projects successfully. My proficiency lies in aligning technology solutions with
            corporate objectives coupled with my profound knowledge of the software development methods.
            To deliver top-notch software on time and within budget, I am capable of leading
            interdisciplinary teams. I know how to foster innovation, support teamwork, and ensure that
            projects are carried out successfully.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
