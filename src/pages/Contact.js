import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='background-container'>
      <div className="background-layer back"></div>
      <div className="content-layer">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out:</p>
        <p>Email: <a href="mailto:info@cosq.in">info@cosq.in</a> or <a href="mailto:odishaanimeclubofficial@gmail.com">odishaanimeclubofficial@gmail.com</a> </p>
      </div>
    </div>
  );
}

export default Contact;
