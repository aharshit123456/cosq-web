"use client";
import { useState } from "react";
import './Events.css'; // Importing the CSS file

// Modal Component
const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{event.title}</h2>
        <div className="modal-description">{event.description}</div>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

// EventCard Component
const EventCard = ({ title, description, onClick }) => {
  return (
    <div className="event-card" onClick={onClick}>
      <h2 className="event-title">{title}</h2>
      <div className="event-description">
        {description.length > 100 ? `${description.substring(0, 100)}...` : description}
      </div>
    </div>
  );
};

// Main Events Component
export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const subEventsData = [
    { title: "LAN Gaming (Mobile and PC)", description: "Join us for an exciting LAN gaming experience!" },
    { title: "Art Competition", description: "Showcase your artistic skills in our art competition!" },
    { title: "Costume Competition", description: "Dress up and compete in our costume contest!" },
    { title: "Manga Competition", description: "Create your own manga and present it!" },
    { title: "Animation Competition", description: "Bring your animations to life!" },
    { title: "DJ", description: "Join our DJ for a night of music and dance!" },
    { title: "Cosplay", description: "Dress up as your favorite character!" },
    { title: "Library", description: "Explore our library for knowledge and inspiration!" },
    { title: "Beyblade", description: "Join the Beyblade battle!" },
    { title: "AMV Editing Competition", description: "Edit your favorite anime moments!" },
    { title: "Arcade (Timezone)", description: "Enjoy various arcade games!" },
    { title: "Battle of the Bands", description: "Join us for a musical showdown!" },
    { title: "VTubing", description: "Explore the world of VTubing!" },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-container" id="event">
      <div className="events-header">
        <h1 className="events-title">*SUB-EVENTS*</h1>
      </div>
      <div className="events-grid">
        {subEventsData.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            onClick={() => handleEventClick(event)}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={selectedEvent} />
    </div>
  );
}
