import {useState} from "react";
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';
import Alert from "./Alert";

const Contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const [alert, setAlert] = useState(null);
  const serviceId = 'service_st6q60w';
  const templateId = 'template_257k3ts';
  const publicKey = 'c8jD36fOp4sdd-JSy';

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await emailjs.send(serviceId, templateId, form, publicKey);
      console.log('Email sent successfully!', response);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setAlert({ message: 'Email sent successfully!', type: 'success' });
      setTimeout(() => setAlert(null), 3000);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      event.target.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setAlert({ message: 'Error sending email.', type: 'error' });
      setTimeout(() => setAlert(null), 3000);
    }
  };

  function handleChange(event){
    const input = event.target.id;
    const value = event.target.value;
    setForm(prev => {return {...prev, [input]:value}})
  }


    return(
      <Element name="contact">
        {alert && <Alert message = {alert.message} type = {alert.type}/>}
        <div className="section-title">
          <h2 className="mb-2 font-bold text-3xl">Contact</h2>
        </div>
        <div className="pl-2 mt-2">
          <p className="ml-2 text-xl">Feel free to contact me</p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 p-2">
        <div className="p-4 rounded-lg alternate-background">
          <form className="w-full mx-auto" onSubmit={handleSubmit}>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <i className="fa-solid fa-user text-xl text-black"></i>
                </div>
                <input type="text" id="name" className="text-black border text-sm rounded-lg block w-full ps-12 p-2.5 " placeholder="John Doe" value={form.name} onChange={handleChange}/>
              </div>

              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email Address</label>
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <i className="fa-solid fa-envelope text-xl text-black"></i>

                </div>
                <input type="text" id="email" className="text-black text-sm rounded-lg block w-full ps-12 p-2.5 " placeholder="johndoe@example.com" value={form.email} onChange={handleChange}/>
              </div>

              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Subject</label>
              <div className="relative mb-3">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <i className="fa-solid fa-pencil text-xl text-black"></i>
                </div>
                <input type="text" id="subject" className="text-black text-sm rounded-lg block w-full ps-12 p-2.5 " placeholder="Subject" value={form.subject} onChange={handleChange}/>
              </div>
              <label htmlFor="message" className="mb-2 text-sm font-medium text-white">Your message</label>
              <textarea id="message" rows="4" className="mb-3 block p-2.5 w-full text-sm text-black rounded-lg" placeholder="Leave a comment..." value={form.message} onChange={handleChange}></textarea>

              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
        <div className="p-4 rounded-lg text-white alternate-background">
          <div className="flex flex-row space-x-5 mb-3">
            <a href ="https://maps.app.goo.gl/B34J1tN4tGAmhMJr7"><i className="fa-solid fa-location-dot  text-4xl"></i></a>
              <div>
                <h4>Location:</h4>
                <p>Utawala, Nairobi, Kenya</p>
              </div>
          </div>
          <div className="flex flex-row space-x-3 mb-3">
            <a href="mailto:mainaowen1997@gmail.com"><i className="fa-solid fa-envelope text-4xl" /></a>
              <div>
                <h4>Email:</h4>
                <p>mainaowen1997@gmail.com</p>
              </div>
          </div>
         
          
          <div className="flex flex-row space-x-4 mb-3">
            <a href="https://www.linkedin.com/in/owen-ngare-maina/"><i className="fa-brands fa-linkedin text-4xl"></i></a>
              <div>
                <h4>LinkedIn:</h4>
                <p>Owen Maina</p>
              </div>
          </div>
        </div>

      </div>

      </Element>

    )
}

export default Contact