import React, { useState, useEffect } from "react";
import ContactImage from "../assets/contact.jpg";
import { SkeletonContact } from "../components/Skeleton";
import "../styles/Contact.css";
import "../styles/Skeleton.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent. We'll get back to you soon!`);
    setFormData({ name: '', email: '', message: '' });
  };

  if (loading) {
    return <SkeletonContact />;
  }

  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="leftSide">
          <img src={ContactImage} alt="Contact Soft Bakery" className="contactImage" />
          <div className="imageText">
            <h3>Visit Our Bakery</h3>
            <p>Fresh baked goods made with love daily</p>
          </div>
        </div>
        <div className="rightSide">
          <div className="contactHeader">
            <h1>Contact Us</h1>
            <p>Have questions or want to place a custom order? Reach out to us!</p>
          </div>

          <form id="contact-form" method="POST" onSubmit={handleSubmit}>
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="name">Full Name *</label>
                <input 
                  name="name" 
                  placeholder="Enter full name..." 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email *</label>
                <input 
                  name="email" 
                  placeholder="Enter email..." 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="formGroup">
              <label htmlFor="phone">Phone</label>
              <input 
                name="phone" 
                placeholder="Enter phone number..." 
                type="tel" 
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="subject">Subject</label>
              <input 
                name="subject" 
                placeholder="What's this about?" 
                type="text" 
              />
            </div>
            
            <div className="formGroup">
              <label htmlFor="message">Message *</label>
              <textarea
                rows="5"
                placeholder="Tell us more about your inquiry..."
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submitBtn">
              <span>Send Message</span>
              <div className="btnIcon">📤</div>
            </button>
          </form>
          
          <div className="contactInfo">
            <div className="infoItem">
              <div className="infoIcon">📍</div>
              <div className="infoText">
                <h4>Visit Us</h4>
                <p>123 Bakery Lane, New York, NY 10001</p>
              </div>
            </div>
            <div className="infoItem">
              <div className="infoIcon">📞</div>
              <div className="infoText">
                <h4>Call Us</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="infoItem">
              <div className="infoIcon">🕐</div>
              <div className="infoText">
                <h4>Hours</h4>
                <p>Mon-Fri: 6AM-8PM, Sat-Sun: 7AM-7PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
