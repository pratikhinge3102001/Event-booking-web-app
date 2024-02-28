import React, { useEffect, useState } from 'react';
import Navbar1 from './NavbarAdmin';

const Revoke = () => {
  const [organisers, setOrganisers] = useState([]);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const organisersResponse = await fetch('https://localhost:7200/api/Organisers');
        const organisersData = await organisersResponse.json();
        setOrganisers(organisersData);

        const attendeesResponse = await fetch('http://localhost:8080/getallattendee');
        const attendeesData = await attendeesResponse.json();
        setAttendees(attendeesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteOrganiser = async (organiserId) => {
    try {
      await fetch(`http://localhost:8080/deleteOrganiser/${organiserId}`, {
        method: 'DELETE',
      });
      setOrganisers((prevOrganisers) => prevOrganisers.filter((organiser) => organiser.organiser_id !== organiserId));
    } catch (error) {
      console.error('Error deleting organiser:', error);
    }
  };

  const handleDeleteAttendee = async (attendeeId) => {
    try {
      await fetch(`http://localhost:8080/deleteAttendee/${attendeeId}`, {
        method: 'DELETE',
      });
      setAttendees((prevAttendees) => prevAttendees.filter((attendee) => attendee.organiser_id !== attendeeId));
    } catch (error) {
      console.error('Error deleting attendee:', error);
    }
  };

  return (
    <>
    <Navbar1/>
    <div className="container mt-5">
    <h2>Organisers</h2>
    <ul className="list-group">
      {organisers.map((organiser) => (
        <li key={organiser.organiser_id} className="list-group-item">
          <div>
            <strong>Organiser ID:</strong> {organiser.organiser_id}
          </div>
            <div>
              <strong>Aadhar Number:</strong> {organiser.aadharno}
            </div>
            <div>
              <strong>Contact:</strong> {organiser.contact}
            </div>
            <div>
              <strong>Date of Birth:</strong> {organiser.dob}
            </div>
            <div>
              <strong>Email:</strong> {organiser.email}
            </div>
            <div>
              <strong>First Name:</strong> {organiser.firstName}
            </div>
            <div>
              <strong>Last Name:</strong> {organiser.lastName}
            </div>
            <div>
              <strong>Gender:</strong> {organiser.gender}
            </div>
            <div>
              <strong>Username:</strong> {organiser.username}
            </div>
            <div>
              <strong>Password:</strong> {organiser.password}
            </div>
            <button className="btn btn-danger" onClick={() => handleDeleteOrganiser(organiser.organiser_id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2 className="mt-4">Attendees</h2>
      <ul className="list-group">
        {attendees.map((attendee) => (
          <li key={attendee.organiser_id} className="list-group-item">
            <div>
              <strong>Attendee ID:</strong> {attendee.organiser_id}
            </div>
            <div>
              <strong>Contact:</strong> {attendee.contact}
            </div>
            <div>
              <strong>Date of Birth:</strong> {attendee.dob}
            </div>
            <div>
              <strong>Email:</strong> {attendee.email}
            </div>
            <div>
              <strong>First Name:</strong> {attendee.fname}
            </div>
            <div>
              <strong>Last Name:</strong> {attendee.lname}
            </div>
            <div>
              <strong>Gender:</strong> {attendee.gender}
            </div>
            <div>
              <strong>Username:</strong> {attendee.username}
            </div>
            <div>
              <strong>Password:</strong> {attendee.password}
            </div>
            <div>
              <strong>Login ID:</strong> {attendee.login.login_id}
            </div>
            <button className="btn btn-danger" onClick={() => handleDeleteAttendee(attendee.organiser_id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default Revoke;
