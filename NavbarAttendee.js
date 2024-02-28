






import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ViewAllEvents from "./viewallevents";
import BookingInfo from "./viewBooking";
import EditAttendeeComp from "./editAttendee";

const NavA = () => {
  const [username, setUsername] = useState(""); // State to store the username

  useEffect(() => {
    // Retrieve the username from local storage
    const storedData = JSON.parse(localStorage.getItem("loggedOrganiser"));
    if (storedData) {
      setUsername(storedData.username);
    }
  }, []);

  const myState = useSelector((state) => state.logged);

  return (
    <div>
      <ul className="nav navbar"> 
        <li></li>
        <li className="nav-item">
          
            Wellcome {username} !
        
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li className="nav-item">
          <Link to="/viewallevents" className="nav-link" id="link" style={{ fontSize: "small" }}>
            View All Events
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/viewBooking/${myState.attendeeId}`} className="nav-link" id="link" style={{ fontSize: "small" }}>
            View Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/editattendee" className="nav-link" id="link" style={{ fontSize: "small" }}>
            Edit Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link" id="link">
            Logout
          </Link>
        </li>
      </ul>

      <div className="container-fluid">
        <Routes>
          <Route path="/viewallevents" element={<ViewAllEvents />} />
          <Route path={`/viewBooking/${myState.attendeeId}`} element={<BookingInfo />} />
          <Route path="/editattendee" element={<EditAttendeeComp />} />
        </Routes>
      </div>
    </div>
  );
};

export default NavA;
