import email from '../assets/svg/email-mail.svg'
import { HomeIcon, UserIcon, ProjectsIcon, SkillsIcon, BackgroundIcon, ContactIcon, GithubIcon, LinkedinIcon } from '../components/Icons';

export const navItems = [
   { to: "home", icon: HomeIcon, label: "Home" },
  { to: "about", icon: UserIcon, label: "About" },
  { to: "projects", icon: ProjectsIcon, label: "Projects" },
  { to: "skills", icon: SkillsIcon, label: "Skills" },
  { to: "background", icon: BackgroundIcon, label: "Background" },
  { to: "contact", icon: ContactIcon, label: "Contact" },
  
];

export const socialLinks = [
  { href: "mailto:mainaowen1997@gmail.com", icon: ContactIcon, label: "Email" },
  { href: "https://github.com/Ngaremaina", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/owen-ngare-maina/", icon: LinkedinIcon, label: "LinkedIn" },
];