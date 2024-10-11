import React from 'react';
import './Contact.css'; // Assuming CSS for styling

const Contact = () => {
  return (
    <div className='background-container'>
      <div className="background-layer back"></div>
      <div className="content-layer">
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out:</p>
        <p>
          Email: <a href="mailto:info@cosq.in">info@cosq.in</a> or 
          <a href="mailto:odishaanimeclubofficial@gmail.com"> odishaanimeclubofficial@gmail.com</a>
        </p>
        
        <p>
          <img 
            src="/icons/whatsapp-icon.png" 
            alt="WhatsApp Icon" 
            style={{ width: '24px', marginRight: '8px', verticalAlign: 'middle' }}
          />
          WhatsApp: <a href="https://chat.whatsapp.com/FvzflrwMdtf6Pya8ul9TO3">Updates Group</a>
        </p>
        
        <p>
          <img 
            src="/icons/instagram-icon.png" 
            alt="Instagram Icon" 
            style={{ width: '24px', marginRight: '8px', verticalAlign: 'middle' }}
          />
          Instagram: <a href="https://instagram.com/the.cosq">@the.cosq</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
