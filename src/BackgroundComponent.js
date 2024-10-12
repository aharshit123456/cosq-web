import React from 'react';
import './Background.css'; // Import your CSS file

const BackgroundComponent = () => {
  return (
    <div className="background-container">
      <div className="background-layer back"></div>
      <div className="background-layer front"></div>
      
      <img src="icon.png" alt="CosQ Logo" className="cosq-logo"/>
      <img src="join-us.png" alt="Join Us" className="join-us"/> {/* Added Join Us image */}
      
      <div className="content">
        {/* Your content here */}
      </div>
      
      <div className="event-text">
        "Odisha's First Open Ground Pop Culture Event" <br />
        <span className="event-date">30th November</span> <br />
        <span className="event-venue">Bhubaneswar, Odisha</span>
      </div>

      <div className="button-container">
        <button className="btn btn-prebooking" onClick={()=> alert("Prebooking Opening Soon")}>Prebooking Open Soon</button>
        <button 
          className="btn btn-volunteer" 
          onClick={() => window.location.href='https://forms.gle/eSjE4LS8Czn3pvay6'}
        >
          Volunteers Join Us
        </button>
      </div>
    </div>
  );
};

export default BackgroundComponent;
