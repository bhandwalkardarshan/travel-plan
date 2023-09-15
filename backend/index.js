const express = require('express');
const cors = require('cors');
const bookingRoutes = require('./routes/booking');
const db = require('./config/db'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

// Use booking routes
app.use('/bookings', bookingRoutes);

// Start the server with a try-catch block
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error('An error occurred while starting the server:', error);
}
