import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvents } from './eventSlice';
import { useNavigate } from 'react-router-dom';
import BookingForm from './Booking';
import NavA from './NavbarAttendee';

const ViewAllEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const status = useSelector((state) => state.events.status);
  const error = useSelector((state) => state.events.error);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    localStorage.setItem('registeredFor', JSON.stringify({ event }));
    const selectedEvent = events.find((e) => e.eventId === event.eventId);
    if (selectedEvent) {
      setSelectedEvent(selectedEvent);
      setIsBookingOpen(true);
      navigate(`/Booking/${event.eventId}`, { state: { eventName: event.eventName, eventId: event.eventId } });
      console.log('You are registering for the following event:', event.eventName, 'Event Id:', event.eventId);
    } else {
      console.log('Event not found:', event.eventId);
    }
  };

  const handleBookingClose = () => {
    setIsBookingOpen(false);
  };

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <>
        <NavA />
        <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
          {events.map((event) => (
            <div key={event.eventId} style={eventCardStyles}>
              <label style={labelStyles}>Event Name:</label>
              <p>{event.eventName}</p>
              <label style={labelStyles}>Description:</label>
              <p>{event.description}</p>
              <label style={labelStyles}>Start Date:</label>
              <p>{event.startDate}</p>
              <label style={labelStyles}>Venue:</label>
              <p>{event.venue}</p>
              <label style={labelStyles}>Available Tickets:</label>
              <p>{event.availableTickets}</p>
              <label style={labelStyles}>Ticket Price:</label>
              <p>{event.ticketPrice}</p>
              <button className="btn btn-primary" onClick={() => handleRegister(event)}>Register</button>
            </div>
          ))}
        </div>
      </>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div>
      {content}
      {isBookingOpen && (
        <BookingForm
          event={selectedEvent}
          onClose={handleBookingClose}
          eventName={selectedEvent ? selectedEvent.eventName : ''}
        />
      )}
    </div>
  );
};

const eventCardStyles = {
  border: '5px solid black',
  padding: '10px',
  margin: '10px',
  width: '300px',
};

const labelStyles = {
  fontWeight: 'bold',
  marginRight: '5px',
  marginBottom: '5px',
};

export default ViewAllEvents;
