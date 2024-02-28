import { useState, useEffect } from 'react';
import Nav from '../Navbar';

const EditOrganiserComp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    dob: '',
    password: '',
  });

  const [loginId, setLoginId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const organiserData = JSON.parse(localStorage.getItem('loggedOrganiser'));

    if (organiserData) {
      setFormData({
        ...organiserData,
      });

      setLoginId(organiserData.organiser_id);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/${loginId}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update organiser data');
      }

      setSuccessMessage('Profile has been updated successfully');
      console.log('Organiser data updated successfully');
    } catch (error) {
      console.error('Error updating organiser data:', error);
    }
  };

  return (
    <>
    <Nav/>
      <div className="container mt-5">
        <h2>Edit Organiser Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth:</label>
            <input
              type="text"
              className="form-control"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Information
          </button>

          {successMessage && (
            <div className="alert alert-success mt-3" role="alert">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default EditOrganiserComp;
