import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faIndustry, faCity } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import contact from '../AdiImg/contactus.jpg';

import './Contact.css';

const Contact = () => {
  const form = useRef()


  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_gsjeizc', 'template_2iubffc', form.current, 'PQl61tHYjX0L1y5uE')
      
    e.target.reset()

  };

  return (
    <div className="container-fluid" style={{ overflow: 'hidden' }}>
      <header className="bg32">
        <img src={contact} alt="Logo" style={{ height: '35rem', opacity: 0.8, width: '100%' }} />
        <div className="AB-text0">
          <h1><span style={{ color: 'black', textAlign: 'left', marginLeft: '0px' }}> Reach Out </span></h1>
          <h1><span style={{ color: 'rgb(255, 102, 0)', textAlign: 'left', marginLeft: '0px' }}> We're Listening</span></h1>
        </div>
      </header>

      <div>
        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <h4 style={{ color: 'orange' }}> <FontAwesomeIcon icon={faMapMarkerAlt} /> Location:</h4>
                    <p style={{ color: 'black' }}>Block No. 02, Sadafulli, Rana Nagar, Aurangabad, Maharashtra 431001</p>
                  </div>
                  <div className="address">
                    <h4 style={{ color: 'orange' }}> <FontAwesomeIcon icon={faIndustry} /> Works</h4>
                    <p style={{ color: 'black' }}>MIDC Waluj, Aurangabad</p>
                  </div>
                  <div className="address">
                    <h4 style={{ color: 'orange' }}> <FontAwesomeIcon icon={faCity} /> Delivery Centres in India</h4>
                    <p style={{ color: 'black' }}>Aurangabad, Pune, Mumbai, Indore, Delhi NCR, Bangalore, Chennai, Hyderabad, Nagpur, Raipur, Kolkata.</p>
                  </div>
                  <div className="email">
                    <h4 style={{ color: 'orange' }}><FontAwesomeIcon icon={faEnvelope} /> Email:</h4>
                    <p style={{ color: 'black' }}>info@thetavega.tech / sales@thetavega.tech</p>
                  </div>
                  <div className="phone">
                    <h4 style={{ color: 'orange' }}> <FontAwesomeIcon icon={faPhone} /> Call:</h4>
                    <p style={{ color: 'black' }}>+91 9175109978 / +91 9371675893</p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15008.914326699822!2d75.3546705!3d19.8725676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x288db97cca822a00!2sTHETAVEGA%20TECH%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1676633012359!5m2!1sen!2sin"
                    frameBorder={0}
                    style={{ border: 0, width: '100%', height: '290px' }}
                    allowFullScreen
                    title="Google Maps"
                  />
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label htmlFor="email">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="mobile">Mobile No</label>
                      <input type="text" name="mobile" className="form-control" id="mobile" required />
                    </div>
                    <div className="form-group col-md-6 mt-3 mt-md-0">
                      <label htmlFor="company">Company Name</label>
                      <input type="text" className="form-control" name="company" id="company" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" name="message" rows="10" required />
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary" onClick={() => window.alert("Email has send ")}>
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
