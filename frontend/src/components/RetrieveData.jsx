import React, { useEffect, useState } from 'react';
import './RetrieveData.css';

function RetrieveData() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/bookings?name=${filter}&sortBy=${sortBy}&order=${order}`);
        if (response.status === 200) {
          const jsonData = await response.json();
          setData(jsonData);
        }
        else {
            console.log('Failed to fetch data. Status:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [filter, sortBy, order]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/bookings/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 204) {
        // Remove the deleted item from the data state
        setData((prevData) => prevData.filter((item) => item._id !== id));
        console.log('Data deleted successfully');
        alert('Data deleted successfully')
      } else {
        console.error('Failed to delete data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="retrieve-data-container">
      <h2>Retrieve Data</h2>
      <div className="retrieve-data-form">
        <input
          type="text"
          placeholder="Filter by Name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="budgetPerPerson">Budget Per Person</option>
        </select>
        <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type="submit">Submit</button>
      </div>
      <div className="card-container">
      {data.map((item) => (
        <div className="data-card" key={item._id}>
          <h3>Name: {item.name}</h3>
          <p>Email: {item.email}</p>
          <p>Destination: {item.destination}</p>
          <p>No. of Travelers: {item.travelers}</p>
          <p>Budget Per Person: {item.budgetPerPerson}</p>
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default RetrieveData;