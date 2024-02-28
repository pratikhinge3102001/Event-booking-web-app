import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ViewAllEvents from "./viewallevents";
import BookingInfo from "./viewBooking";
import EditAttendeeComp from "./editAttendee";

export const AttendeeHome = () => {
  const [attendee, setAttendee] = useState(null);
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    const loginid = JSON.parse(localStorage.getItem("loggedOrganiser")).login_id;
    fetch(`http://localhost:8080/attendee/${loginid}`)
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem("loggedOrganiser", JSON.stringify(data));
        setAttendee(data);

        // Navigate to the default route ("/viewallevents")
        navigate("/viewallevents");
      });
  }, []);

  const myState = useSelector(state => state.logged);

  return (
    <div>
      <ul className='nav navbar' style={{ backgroundColor: "black" }}>
        
        <li className='nav-item'><Link to='/profile' className='nav-link' id='link'>{myState.username}</Link></li>
        <li className='nav-item'><Link to='/viewallevents' className='nav-link' id='link' style={{ fontSize: "small" }}>View All Events</Link></li>
        <li className='nav-item'><Link to='/viewBooking/:attendeeId' className='nav-link' id='link' style={{ fontSize: "small" }}>view Bookings</Link></li>
        <li className='nav-item'><Link to='/editattendee' className='nav-link' id='link' style={{ fontSize: "small" }}>Edit Profile</Link></li>
        <li className='nav-item'><Link to='/logout' className='nav-link' id='link'>logout</Link></li>
      </ul>

      <div className="container-fluid">
        <Routes>
          <Route path='/viewallevents' element={<ViewAllEvents />} />
          <Route path='/viewBooking/:attendeeId' element={<BookingInfo />} />
          <Route path='/editattendee' element={<EditAttendeeComp />} />
        </Routes>
      </div>
    </div>
  );
};
