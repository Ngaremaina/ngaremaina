import React,{useState} from "react";
import { Element } from 'react-scroll'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const serviceId = 'service_st6q60w';
  const templateId = 'template_257k3ts';
  const publicKey = 'c8jD36fOp4sdd-JSy';

  function handleSubmit(event){
    event.preventDefault()
     emailjs.send(serviceId, templateId, form, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setForm('')
        
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
      event.target.reset()
    }

  function handleChange(event){
    const input = event.target.name;
    const value = event.target.value;
    setForm(prev => {return {...prev, [input]:value}})
  }

  
    return(
      <Element name="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Feel free to contact me</p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Utawala, Nairobi, Kenya</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>mainaowen1997@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bx bxl-linkedin" />
                  <h4>LinkedIn:</h4>
                  <p><a href="https://www.linkedin.com/in/owen-ngare-maina/">Owen Maina</a></p>
                </div>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen /> */}
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form className="php-email-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" value={form.name} required onChange={handleChange} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={form.email} required onChange={handleChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" required value={form.subject} onChange={handleChange}/>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" value = {form.message} rows={10} required defaultValue={""} onChange={handleChange} />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </Element>

    )
}

export default Contact