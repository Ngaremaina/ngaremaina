import { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";
import { contactInfo, fields, initialForm } from "../data/contact";

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [alert, setAlert] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(serviceId, templateId, form, publicKey);
      setAlert({ message: "Email sent successfully!", type: "success" });
      setTimeout(() => setAlert(null), 3000);
      setForm(initialForm);
      event.target.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setAlert({ message: "Error sending email.", type: "error" });
      setTimeout(() => setAlert(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const inputClasses =
    "block w-full rounded-lg border border-transparent p-2.5 ps-12 text-sm text-black focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <Element name="contact" className="py-12">
      {alert && <Alert message={alert.message} type={alert.type} />}

      <h2 className="section-heading">Contact</h2>
      <p className="mb-6 text-light/90">Feel free to contact me</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card">
          <form className="w-full" onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.id} className="mb-4">
                <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-white">
                  {field.label}
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <i className={`fa-solid ${field.icon} text-xl text-black`} />
                  </span>
                  <input
                    type="text"
                    id={field.id}
                    className={inputClasses}
                    placeholder={field.placeholder}
                    value={form[field.id]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}

            <div className="mb-4">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block w-full rounded-lg p-2.5 text-sm text-black focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Leave a comment..."
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary">
               {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="card text-white">
          {contactInfo.map((info) => (
            <div key={info.title} className="mb-6 flex items-start gap-4">
              <a href={info.href} aria-label={info.title}>
                <i className={`${info.brand ? "fa-brands" : "fa-solid"} ${info.icon} text-3xl text-accent`} />
              </a>
              <div>
                <h4 className="font-semibold text-white">{info.title}:</h4>
                <p className="text-light/80">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Contact;
