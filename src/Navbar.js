import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create a separate CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-button">Home</Link>
      <Link to="/more" className="nav-button">More</Link>
      <Link to="/contact" className="nav-button">Contact</Link>
    </div>
  );
}

export default Navbar;
