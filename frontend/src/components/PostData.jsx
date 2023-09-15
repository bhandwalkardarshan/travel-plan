import React, { useState } from 'react';
import './PostData.css'; 

function PostData() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: 'India',
    travelers: 1,
    budgetPerPerson: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        console.log('Data posted successfully');
        // Optionally, reset the form fields here
        setFormData({
            name: '',
            email: '',
            destination: 'India',
            travelers: 1,
            budgetPerPerson: 0,
          })
        alert('Data posted successfully')
      } else {
        console.error('Failed to post data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    <h2>Post Data</h2>
    <div className="post-data-container">
      
      <form className="post-data-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <select
          name="destination"
          value={formData.destination}
          onChange={handleChange}
        >
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="America">America</option>
        </select>
        <input
          type="number"
          name="travelers"
          placeholder="No. of Travelers"
          value={formData.travelers}
          onChange={handleChange}
        />
        <input
          type="number"
          name="budgetPerPerson"
          placeholder="Budget Per Person"
          value={formData.budgetPerPerson}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>   
  );
}

export default PostData;