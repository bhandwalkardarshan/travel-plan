// routes/bookings.js
const express = require('express');
const router = express.Router();
const Booking = require('../models/booking.model');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the booking.' });
  }
});

// Retrieve all bookings
router.get('/', async (req, res) => {
    try {
      const { name, sortBy, order } = req.query;
  
      // Define a regex pattern based on the 'name' query parameter
      const nameRegex = name ? new RegExp(name, 'i') : null; // 'i' for case-insensitive search
  
      // Create a filtering object based on the 'name' query parameter
      const filter = {};
      if (nameRegex) {
        filter.name = nameRegex;
      }
  
      // Create a sorting object based on the 'sortBy' and 'order' query parameters
      const sortOptions = {};
      if (sortBy) {
        const sortOrder = order === 'asc' ? 1 : -1;
        sortOptions[sortBy] = sortOrder;
      }
  
      // Use the filter and sort options when querying the database
      const bookings = await Booking.find(filter).sort(sortOptions);
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving bookings.' });
    }
  });

// Delete a booking by ID
router.delete('/:id', async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the booking.' });
  }
});

module.exports = router;
