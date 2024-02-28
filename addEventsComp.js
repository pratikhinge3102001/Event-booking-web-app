// import React, { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { addEvent } from './actions';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from '../Navbar';

// const getCurrentDateTime = () => {
//   const now = new Date();
//   const year = now.getFullYear();
//   const month = `${(now.getMonth() + 1)}`.padStart(2, '0');
//   const day = `${now.getDate()}`.padStart(2, '0');
//   const hours = `${now.getHours()}`.padStart(2, '0');
//   const minutes = `${now.getMinutes()}`.padStart(2, '0');

//   return `${year}-${month}-${day}T${hours}:${minutes}`;
// };

// const AddEventsComp = ({ addEvent }) => {
//   const [formData, setFormData] = useState({
//     availableTickets: '',
//     description: '',
//     eventName: '',
//     startDate: getCurrentDateTime(),
//     ticketPrice: '',
//     endDate: getCurrentDateTime(),
//     location: '',
//     venue: '',
//     organiser: {},
//     categoryId: '', // new field
//   });

//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('http://localhost:8080/getallcat');
//         if (!response.ok) {
//           throw new Error('Failed to fetch categories');
//         }
//         const categoriesData = await response.json();
//         setCategories(categoriesData);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'eventName') {
//       const selectedCategory = categories.find((cat) => cat.catName === value);
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         eventName: value,
//         categoryId: selectedCategory ? selectedCategory.catId : '',
//       }));
//     } else {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const loggedOrganiser = JSON.parse(localStorage.getItem('loggedOrganiser'));
//       if (!loggedOrganiser || !loggedOrganiser.organiser_id) {
//         throw new Error('Organiser ID not found in localStorage');
//       }

//       const formDataWithFullObjects = {
//         ...formData,
//         organiser: loggedOrganiser,
//         eventName : formData.eventName
//       };

//       const requestBody = {
//         ...formDataWithFullObjects,
//         organiser_id: loggedOrganiser.organiser_id,
//         categoryId: formDataWithFullObjects.categoryId, // new field
//       };

//       const response = await fetch('http://localhost:8080/saveevent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(requestBody),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add event');
//       }

//       addEvent(formDataWithFullObjects);
//     } catch (error) {
//       console.error('Error adding event:', error);
//     }
//   };

//   return (
//     <>
//       <Nav />
//       <div className="container mt-4">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <h2 className="text-center mb-4">Add Event</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Available Tickets:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="availableTickets"
//                   value={formData.availableTickets}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Description:</label>
//                 <textarea
//                   rows="4"
//                   className="form-control"
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">select Category:</label>
//                 <select
//                   className="form-select"
//                   name="eventName"

//                   onChange={handleChange}
//                 >
//                   <option value="">Select a category</option>
//                   {categories.map((category) => (
//                     <option key={category.catName} value={FormData.catName}>
//                       {category.catName}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Event Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="eventName"
//                   value={formData.eventName}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Start Date:</label>
//                 <input
//                   type="datetime-local"
//                   className="form-control"
//                   name="startDate"
//                   value={formData.startDate}
//                   onChange={handleChange}
//                   min={getCurrentDateTime()}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Ticket Price:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="ticketPrice"
//                   value={formData.ticketPrice}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Location:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">End Date:</label>
//                 <input
//                   type="datetime-local"
//                   className="form-control"
//                   name="endDate"
//                   value={formData.endDate}
//                   onChange={handleChange}
//                   min={getCurrentDateTime()}
//                 />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Venue:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="venue"
//                   value={formData.venue}
//                   onChange={handleChange}
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Add Event
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default connect(null, { addEvent })(AddEventsComp);
























// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addEvent } from './actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Navbar';

// Function to get the current date and time in the required format
const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${(now.getMonth() + 1)}`.padStart(2, '0');
  const day = `${now.getDate()}`.padStart(2, '0');
  const hours = `${now.getHours()}`.padStart(2, '0');
  const minutes = `${now.getMinutes()}`.padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// Main component definition
const AddEventsComp = ({ addEvent }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    availableTickets: '',
    description: '',
    eventName: '',
    startDate: getCurrentDateTime(),
    ticketPrice: '',
    endDate: getCurrentDateTime(),
    location: '',
    venue: '',
    organiser: {},
    categoryId: '', // new field
  });

  // State to manage categories
  const [categories, setCategories] = useState([]);
  // State to manage success message
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories data from the server
        const response = await fetch('http://localhost:8080/getallcat');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        // Parse and set the categories data in the state
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        // Log an error if fetching categories fails
        console.error('Error fetching categories:', error);
      }
    };

    // Call the fetchCategories function
    fetchCategories();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'eventName') {
      // Find the selected category based on the event name
      const selectedCategory = categories.find((cat) => cat.catName === value);
      // Update form data with the selected category ID
      setFormData((prevFormData) => ({
        ...prevFormData,
        eventName: value,
        categoryId: selectedCategory ? selectedCategory.catId : '',
      }));
    } else {
      // Update form data for other fields
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Retrieve logged organiser data from localStorage
      const loggedOrganiser = JSON.parse(localStorage.getItem('loggedOrganiser'));
      // Throw an error if organiser data is not found
      if (!loggedOrganiser || !loggedOrganiser.organiser_id) {
        throw new Error('Organiser ID not found in localStorage');
      }

      // Prepare the form data with the full organiser object
      const formDataWithFullObjects = {
        ...formData,
        organiser: loggedOrganiser,
        eventName: formData.eventName,
      };

      // Prepare the request body for the POST request
      const requestBody = {
        ...formDataWithFullObjects,
        organiser_id: loggedOrganiser.organiser_id,
        categoryId: formDataWithFullObjects.categoryId, // new field
      };

      // Make a POST request to save the event on the server
      const response = await fetch('http://localhost:8080/saveevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Throw an error if the request is not successful
      if (!response.ok) {
        throw new Error('Failed to add event');
      }

      // Call the addEvent action with the form data
      addEvent(formDataWithFullObjects);

      // Show success message and reset the form
      setSuccessMessage('Event added successfully!');
      setFormData({
        availableTickets: '',
        description: '',
        eventName: '',
        startDate: getCurrentDateTime(),
        ticketPrice: '',
        endDate: getCurrentDateTime(),
        location: '',
        venue: '',
        organiser: {},
        categoryId: '', // new field
      });
    } catch (error) {
      // Log an error if adding the event fails
      console.error('Error adding event:', error);
    }
  };

  // JSX rendering of the component
  return (
    <>
      <Nav />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="text-center mb-4">Add Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Available Tickets:</label>
                <input
                  type="text"
                  className="form-control"
                  name="availableTickets"
                  value={formData.availableTickets}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description:</label>
                <textarea
                  rows="4"
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">select Category:</label>
                <select
                  className="form-select"
                  name="eventName"

                  onChange={handleChange}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.catName} value={FormData.catName}>
                      {category.catName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Event Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Start Date:</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  min={getCurrentDateTime()}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Ticket Price:</label>
                <input
                  type="text"
                  className="form-control"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Location:</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">End Date:</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  min={getCurrentDateTime()}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Venue:</label>
                <input
                  type="text"
                  className="form-control"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                />
              </div>
             
              <button type="submit" className="btn btn-primary">
                Add Event
              </button>

            </form>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

// Connect the component to Redux, binding the addEvent action
export default connect(null, { addEvent })(AddEventsComp);
