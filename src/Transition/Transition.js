import React, { useEffect, useState } from 'react';
import './Transition.css';

const Transition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to start the transition
  const startTransition = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Duration of the GIF display (1.5 seconds)
  };

  useEffect(() => {
    startTransition();
  }, [children]); // Trigger the transition whenever children change

  return (
    <div className="transition-container">
      {isLoading && (
        <div className="transition-gif">
          <img src="matrix.gif" alt="Transition" />
        </div>
      )}
      <div className={`content ${isLoading ? 'hidden' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Transition;
