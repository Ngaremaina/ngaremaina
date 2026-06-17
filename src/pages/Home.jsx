import { Element } from "react-scroll";
import logo from '../assets/img/background.jpg'

const Home = () => {
  return (
    <Element
      name="home"
      id="home"
      className="relative -mx-4 -mt-8 flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-center sm:-mx-6 lg:-mx-12"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4">
        <h1 className="text-5xl font-bold text-white sm:text-6xl">Owen Maina</h1>
        <p className="mt-4 text-2xl text-white">
          <span className="border-b-[3px] border-accent pb-1 tracking-wide">
            Software Developer | Software Engineer
          </span>
        </p>
        <p className="mt-4 text-lg text-white/90">
          Experience with JavaScript and Python Programming
        </p>
      </div>
    </Element>
  );
};

export default Home;
