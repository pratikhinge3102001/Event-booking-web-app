import React, { useState, useEffect } from 'react';
import NavA from './NavbarAttendee';
import { useParams } from 'react-router-dom';

const BookingInfo = () => {
  const [bookingInfo, setBookingInfo] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const { attendee_id } = useParams();

  const loggedAttendee = JSON.parse(localStorage.getItem('loggedOrganiser'));

  useEffect(() => {
    if (loggedAttendee && loggedAttendee.attendee_id) {
      const attendeeIdFromStorage = loggedAttendee.attendee_id;
      fetchData(attendeeIdFromStorage);
    } else {
      console.error('AttendeeId not found in local storage');
    }
  }, [fetchTrigger]);

  const fetchData = async (attendeeId) => {
    try {
      const response = await fetch(`http://localhost:8080/userattendee/${attendeeId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch booking information');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      if (Array.isArray(data)) {
        setBookingInfo(data);
      } else {
        console.error('Expected an array of booking information, but got:', data);
      }
    } catch (error) {
      console.error('Error fetching booking information:', error.message);
    }
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:8080/deletebooking/${bookingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to cancel booking');
      }

      console.log(`Booking with ID ${bookingId} has been canceled`);

      setFetchTrigger(!fetchTrigger);
    } catch (error) {
      console.error('Error cancelling booking:', error.message);
    }
  };

  return (
    <>
      <NavA />
      <div style={{padding: '20px', minHeight: '100vh', background:  'transparent'}}>
        <h2>Booking Information</h2>
        {bookingInfo.length > 0 ? (
          <table className="table table-bordered mt-3" style={{ border: '5px solid black', background: 'transparent' }}>
            <thead>
              <tr style={{ background: 'transparent' }} >
                <th>Booking ID</th>
                <th>Booking Date</th>
                <th>Ticket Quantity</th>
                <th>Total Cost</th>
                <th>Event Name</th>
                <th>Event ID</th>
                <th>Cancel Booking</th>
              </tr>
            </thead>
            <tbody style={{ background: 'transparent' }}>
              {bookingInfo.map((booking) => {
                const {
                  bookingId,
                  bookingDate,
                  ticketQuantity,
                  totalCost,
                  event: { eventName, eventId },
                } = booking;

                return (
                  <tr key={bookingId}>
                    <td>{bookingId}</td>
                    <td>{bookingDate}</td>
                    <td>{ticketQuantity}</td>
                    <td>{totalCost}</td>
                    <td>{eventName}</td>
                    <td>{eventId}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleCancelBooking(bookingId)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>No booking information available </p>
        )}
      </div>
    </>
  );
};

export default BookingInfo;
