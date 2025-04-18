import React, { useState } from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          src="https://assets.nicepagecdn.com/d2cc3eaa/6322200/images/brunette-woman-eating-salad_23-2.jpg" 
          alt="Profile"
          className={styles.image}
        />
        <h2>Say hello</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone (e.g. +14155552767868766876675)"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.inputGroupFull}>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitButton}>SUBMIT</button>
      </form>
    </div>
    </> 
    
  );
};

export default ContactUs;