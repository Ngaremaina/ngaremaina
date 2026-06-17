import { Link as ScrollLink } from "react-scroll";
import { socialLinks, navItems } from "../data/home";
import profile from '../assets/img/ngare.jpg'

const NavBar = ({ isOpen = false, onNavigate = () => {} }) => {
  return (
    <header
      className={`fixed left-0 top-0 z-40 h-screen w-72 overflow-y-auto bg-sidebar px-4 transition-transform duration-500 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col">
        <div className="py-6 text-center">
          <img
            src={profile}
            alt="Owen Maina"
            className="mx-auto h-28 w-28 rounded-full border-8 border-[#2c2f3f] object-cover"
          />
          <h1 className="mt-4 text-2xl font-semibold text-white">
            <a href="/" className="text-white hover:text-white">
              Owen Maina
            </a>
          </h1>
          <div className="mt-3 flex justify-center gap-2">
            {socialLinks.map((link) => {
              const Icon = link.icon; // 👈 important

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#212431] text-white transition hover:bg-accent hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <nav>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon; 
              return (
                <li key={item.to}>
                  <ScrollLink
                    className="nav-link"
                    activeClass="active"
                    to={item.to}
                    spy
                    smooth
                    offset={-70}
                    duration={800}
                    onClick={onNavigate}
                  >
                    <Icon className="icon" />
                    <span>{item.label}</span>
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
