import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import More from './pages/More.js';
import Contact from './pages/Contact.js';
import BackgroundComponent from './BackgroundComponent';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>  {/* Add the Navbar to the top */}
        <Routes>
          <Route path="/" element={<BackgroundComponent />} />
          <Route path="/more" element={<More />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
