import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import More from './pages/More.js';
import Contact from './pages/Contact.js';
import BackgroundComponent from './BackgroundComponent';
import Transition from './Transition/Transition.js'; // Import the Transition component

function App() {
  return (
    <Router>
      <div>
        <Navbar />  {/* Add the Navbar to the top */}
        <Routes>
          <Route 
            path="/" 
            element={
              <Transition>
                <BackgroundComponent />
              </Transition>
            } 
          />
          <Route 
            path="/more" 
            element={
              <Transition>
                <More />
              </Transition>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Transition>
                <Contact />
              </Transition>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
