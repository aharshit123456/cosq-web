import React , { useState }from 'react';
import './App.css'; // Import your CSS styles
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {

  const [showModal, setShowModal] = useState(false); // State to manage modal visibility

  const handleButtonClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    setShowModal(true); // Show the modal
  };

  return (
    <div className="container">
      <img src="icon.png" alt="Event Logo" className="logo" />
      
      <div className="description">
        Odisha's 1st Open Ground Cosplay & LAN Gaming Event! 🎮✨ Adventurers Assemble!
      </div>

      <div className="social-icons">
        <a href="https://instagram.com/odisha_anime_club_" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://chat.whatsapp.com/K9wodvkCTTlC1wY9JW1uv6" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>

      <div className="buttons">
        {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdetxNNoUbwSHmtHJQ2oZELsQIkSAujYFkF61ab_jbFk_wcfw/viewform?usp=sf_link" className="button">
          <i className="fas fa-user-friends"></i> Join Us Adventurers (Volunteers)
        </a> */}
        <a href="#" className="button" onClick={handleButtonClick}>
          <i className="fas fa-user-friends"></i> Join Us Adventurers (Volunteers)
        </a>
        {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSeC3gq88aZioE1lyK7zwoY-pjrXa7qBVcNiO92kmVhSO19apQ/viewform?usp=sf_link" className="button">
          <i className="fas fa-building"></i> Attention Business Owners
        </a> */}
                <a href="#" className="button" onClick={handleButtonClick}>
                <i className="fas fa-building"></i> Attention Business Owners
                </a>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Wait till tomorrow</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
