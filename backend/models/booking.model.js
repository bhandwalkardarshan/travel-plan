// models/Booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    enum: ['India', 'Africa', 'Europe', 'America'],
    required: true,
  },
  travelers: {
    type: Number,
    required: true,
  },
  budgetPerPerson: {
    type: Number,
    required: true,
  },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
