export const initialForm = { name: "", email: "", subject: "", message: "" };

export const fields = [
  { id: "name", label: "Your Name", icon: "fa-user", placeholder: "John Doe" },
  { id: "email", label: "Your Email Address", icon: "fa-envelope", placeholder: "johndoe@example.com" },
  { id: "subject", label: "Your Subject", icon: "fa-pencil", placeholder: "Subject" },
];

export const contactInfo = [
  {
    icon: "fa-location-dot",
    title: "Location",
    value: "Utawala, Nairobi, Kenya",
    href: "https://maps.app.goo.gl/B34J1tN4tGAmhMJr7",
  },
  {
    icon: "fa-envelope",
    title: "Email",
    value: "mainaowen1997@gmail.com",
    href: "mailto:mainaowen1997@gmail.com",
  },
  {
    icon: "fa-linkedin",
    title: "LinkedIn",
    value: "Owen Maina",
    href: "https://www.linkedin.com/in/owen-ngare-maina/",
    brand: true,
  },
];