import React from 'react';
import './Background.css'; // Import your CSS file

const BackgroundComponent = () => {
  return (
<div class="background-container">
  
  <div class="background-layer back"></div>
  <div class="background-layer front"></div>
  <img src="icon.png" alt="CosQ Logo" class="cosq-logo"/>
  <div class="content">
    {/* <!-- Your content here --> */}
  </div>
  <div className="event-text">
  "Odisha's First Open Ground Pop Culture Event" <br/>
  <span className="event-date"> 30th November </span> <br/>
  <span className="event-venue"> Bhubaneswar, Odisha </span>
  </div>

  <div className="button-container">
    <button className="btn btn-prebooking">Prebooking Open Soon</button>
    <button className="btn btn-volunteer">Volunteers Join Us</button>
  </div>
</div>

  );
};

export default BackgroundComponent;
