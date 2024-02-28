import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Navbar';

const ViewEvent = () => {
  const [events, setEvents] = useState([]);
  const [organiserId, setOrganiserId] = useState(null);

  useEffect(() => {
    const organiser = localStorage.getItem("loggedOrganiser");
    const org = JSON.parse(organiser);
    const id = org.organiser_id;
    setOrganiserId(id);

    fetchEvents(id);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async (organiserId) => {
    try {
      const response = await fetch(`http://localhost:8080/eventsbyorganiser/${organiserId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${data.message}`);
      }

      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };

  const handleDelete = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:8080/${eventId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }
      
      fetchEvents(organiserId);
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  const handleUpdate = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:8080/${eventId}`, {
        method: 'PUT',
      });

      if (!response.ok) {
        throw new Error('Failed to update event');
      }
      
      fetchEvents(organiserId);
    } catch (error) {
      console.error('Error updating event:', error.message);
    }
  };

  return (
    <>
      <Nav />
      <div className="container mt-5 mb-3">
        <h2>View Events</h2>
        <div className="card-deck">
          {events.map((event) => (
            <div key={event.eventId} className="card">
              <div className="card-body">
                <h5 className="card-title">Event Name: {event.eventName}</h5>
                <p className="card-text">Description: {event.description}</p>
                <p className="card-text">Start Date: {event.startDate}</p>
                <p className="card-text">Venue: {event.venue}</p>
                <p className="card-text">Available Ticket: {event.availableTickets}</p>
                <p className="card-text">Ticket Price: {event.ticketPrice}</p>
                <button
                  onClick={() => handleDelete(event.eventId)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(event.eventId)}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewEvent;
