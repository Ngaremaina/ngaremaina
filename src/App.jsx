import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Link as ScrollLink } from "react-scroll";
import NavBar from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Background from "./pages/Background";
import Contact from "./components/Contact";
import { MenuIcon, ArrowUpIcon, CloseIcon } from "./components/Icons";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((open) => !open);
  const closeNav = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-base text-light">
      <Analytics />

      {/* Mobile navigation toggle */}
      <button
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={toggleNav}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg lg:hidden"
      >
        {isOpen ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      <NavBar isOpen={isOpen} onNavigate={closeNav} />

      <main className="px-4 py-8 sm:px-6 lg:ml-72 lg:px-12">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>

      {/* Back to top */}
      <ScrollLink
        to="home"
        smooth
        duration={600}
        className="fixed bottom-4 right-4 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-accent text-white transition hover:bg-accent-hover"
        aria-label="Back to top"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </ScrollLink>
    </div>
  );
}

export default App;
