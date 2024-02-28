




// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { resetBookings } from './bookingSlice';
// import NavA from './NavbarAttendee';


// function Booking() {
  
//   const dispatch = useDispatch();
//   const { status, error } = useSelector((state) => state.bookings);
//   const { eventId } = useParams();
//   const [noOfTickets, setNoOfTickets] = useState(1);
//   const [event, setEvent] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState('cash');
//   const [upiId, setUpiId] = useState('');
//   const [loading, setLoading] = useState(true); // Add loading state

//   // Fetch event data on component mount
//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
        
//         const loggedAttendee = JSON.parse(localStorage.getItem('loggedOrganiser'));
//         if (!loggedAttendee || !loggedAttendee.attendee_id) {
//           console.error('AttendeeId not found in local storage');
//           setLoading(false); 
//           return;
//         }

//         const response = await fetch(`http://localhost:8080/eventsbyid?eid=${eventId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch event');
//         }
//         const data = await response.json();
//         localStorage.setItem('event', JSON.stringify(data));
//         setEvent(data);
//         setLoading(false); 
//         console.log('Fetched Event:', data);
//       } catch (error) {
//         console.error('Error fetching event:', error);
//         setLoading(false); 
//       }
//     };

//     fetchEvent();
//   }, [eventId]);

  
//   const resetForm = () => {
//     setNoOfTickets(1);
//     setPaymentMethod('cash');
//     setUpiId('abc@ybl');
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!event) {
//       console.log('Event not found in local storage');
//       return;
//     }

    
//     const loggedAttendee = JSON.parse(localStorage.getItem('loggedOrganiser'));
//     const booking = {
//       bookingDate: new Date().toISOString().slice(0, 10),
//       ticketQuantity: parseInt(noOfTickets),
//       totalCost: parseFloat(noOfTickets * event.ticketPrice),
//       attendeeId: loggedAttendee.attendee_id,
//       eventId: parseInt(event.eventId),
//       paymentStatus: paymentMethod === 'cash' ? 0 : 1,
//       paymentMode: paymentMethod,
//       upiId: paymentMethod === 'upi' ? upiId : null,
//       bookingStatus: 1, 
//     };

//     try {
//       const response = await fetch('http://localhost:8080/savebooking', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(booking),
//       });

//       console.log('Request Payload:', JSON.stringify(booking));

//       if (!response.ok) {
//         throw new Error('Failed to save booking');
//       }

//       resetForm();
//       console.log('Booking added successfully');
//       dispatch(resetBookings());

//       alert('Booking registered successfully');
//     } catch (error) {
//       console.error('Error saving booking:', error.message);
//     }
//   };

  
//   return (
//     <>
//     <NavA/>
//     <div className="container mt-5">
//       <h1 className="mb-4">Booking</h1>
//       {loading ? ( 
//         <div>Loading...</div>
//       ) : event ? (
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="eventName" className="form-label">
//               Event Name:
//             </label>
//             <input type="text" id="eventName" className="form-control" value={event.eventName} readOnly />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="bookingDate" className="form-label">
//               Booking Date:
//             </label>
//             <input type="date" id="bookingDate" className="form-control" value={new Date().toISOString().slice(0, 10)} readOnly />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="noOfTickets" className="form-label">
//               Number of Tickets:
//             </label>
//             <input
//               type="number"
//               id="noOfTickets"
//               className="form-control"
//               min="1"
//               value={noOfTickets}
//               onChange={(e) => setNoOfTickets(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="totalCost" className="form-label">
//               Total Cost:
//             </label>
//             <input type="number" id="totalCost" className="form-control" value={noOfTickets * event.ticketPrice} readOnly />
//           </div>
//           <input type="hidden" name="eventId" value={event.eventId} />

//           <div className="mb-3">
//             <label htmlFor="paymentMethod" className="form-label">
//               Payment Method:
//             </label>
//             <select
//               id="paymentMethod"
//               className="form-control"
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option value="cash">Cash</option>
//               <option value="upi">UPI</option>
//             </select>
//           </div>

//           {paymentMethod === 'upi' && (
//             <div className="mb-3">
//               <label htmlFor="upiId" className="form-label">
//                 Enter UPI ID:
//               </label>
//               <input
//                 type="text"
//                 id="upiId"
//                 className="form-control"
//                 value={upiId}
//                 onChange={(e) => {
//                   console.log('Updating upiId:', e.target.value);
//                   setUpiId(e.target.value || '');
//                 }}
//               />
//             </div>
//           )}

//           <button type="submit" className="btn btn-primary">
//             Confirm Booking
//           </button>
//         </form>
//       ) : (
//         <div>Event not found</div>
//       )}
//     </div>
//     </>
//   );
// }


// export default Booking;













import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetBookings } from './bookingSlice';
import NavA from './NavbarAttendee';

function Booking() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.bookings);
  const { eventId } = useParams();
  const [noOfTickets, setNoOfTickets] = useState(1);
  const [event, setEvent] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [upiId, setUpiId] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const loggedAttendee = JSON.parse(localStorage.getItem('loggedOrganiser'));
        if (!loggedAttendee || !loggedAttendee.attendee_id) {
          console.error('AttendeeId not found in local storage');
          setLoading(false);
          return;
        }

        const response = await fetch(`http://localhost:8080/eventsbyid?eid=${eventId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event');
        }
        const data = await response.json();
        localStorage.setItem('event', JSON.stringify(data));
        setEvent(data);
        setLoading(false);
        console.log('Fetched Event:', data);
      } catch (error) {
        console.error('Error fetching event:', error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const resetForm = () => {
    setNoOfTickets(1);
    setPaymentMethod('cash');
    setUpiId('abc@ybl');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!event) {
      console.log('Event not found in local storage');
      return;
    }

    const loggedAttendee = JSON.parse(localStorage.getItem('loggedOrganiser'));
    const booking = {
      bookingDate: new Date().toISOString().slice(0, 10),
      ticketQuantity: parseInt(noOfTickets),
      totalCost: parseFloat(noOfTickets * event.ticketPrice),
      attendeeId: loggedAttendee.attendee_id,
      eventId: parseInt(event.eventId),
      paymentStatus: paymentMethod === 'cash' ? 0 : 1,
      paymentMode: paymentMethod,
      upiId: paymentMethod === 'upi' ? upiId : null,
      bookingStatus: 1,
    };

    try {
      const response = await fetch('http://localhost:8080/savebooking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      });

      console.log('Request Payload:', JSON.stringify(booking));

      if (!response.ok) {
        throw new Error('Failed to save booking');
      }

      resetForm();
      console.log('Booking added successfully');
      dispatch(resetBookings());

      alert('Booking registered successfully');
    } catch (error) {
      console.error('Error saving booking:', error.message);
    }
  };

  return (
    <>
      <NavA />
      <div className="container mt-5" style={{ padding: '20px' }}>
        <h1 className="mb-4">Booking</h1>
        {loading ? (
          <div>Loading...</div>
        ) : event ? (
          <form onSubmit={handleSubmit} style={{ border: '5px solid black', padding: '20px', borderRadius: '10px' }}>
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label">
                Event Name:
              </label>
              <input type="text" id="eventName" className="form-control" value={event.eventName} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="bookingDate" className="form-label">
                Booking Date:
              </label>
              <input type="date" id="bookingDate" className="form-control" value={new Date().toISOString().slice(0, 10)} readOnly />
            </div>
            <div className="mb-3">
              <label htmlFor="noOfTickets" className="form-label">
                Number of Tickets:
              </label>
              <input
                type="number"
                id="noOfTickets"
                className="form-control"
                min="1"
                value={noOfTickets}
                onChange={(e) => setNoOfTickets(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="totalCost" className="form-label">
                Total Cost:
              </label>
              <input type="number" id="totalCost" className="form-control" value={noOfTickets * event.ticketPrice} readOnly />
            </div>
            <input type="hidden" name="eventId" value={event.eventId} />
            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">
                Payment Method:
              </label>
              <select
                id="paymentMethod"
                className="form-control"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="cash">Cash</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            {paymentMethod === 'upi' && (
              <div className="mb-3">
                <label htmlFor="upiId" className="form-label">
                  Enter UPI ID:
                </label>
                <input
                  type="text"
                  id="upiId"
                  className="form-control"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value || '')}
                />
              </div>
            )}
            <button type="submit" className="btn btn-primary">
              Confirm Booking
            </button>
          </form>
        ) : (
          <div>Event not found</div>
        )}
      </div>
    </>
  );
}

export default Booking;
