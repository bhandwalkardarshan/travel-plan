## Travel Booking Application

The Travel Booking Application is a full-stack web application that facilitates travel booking management. It offers users the ability to post new bookings, retrieve existing bookings, filter data by name, sort data by name or budget per person, and delete individual bookings. This README provides an overview of the project and instructions for running it locally.

### Problem Statement

The goal of this project is to create a web application that simplifies travel booking management. Users can submit their travel details, view their bookings, and filter and sort them based on specific criteria. Additionally, they can delete individual bookings as needed.

### Features

- **Post Data Component:**
  - Users can submit new travel bookings with the following information:
    - Name
    - Email Address
    - Destination (selectable from India, Africa, Europe, America)
    - Number of Travelers
    - Budget Per Person
  - Data is sent to the server for storage in the database.

- **Retrieve Data Component:**
  - Displays a list of all travel bookings.
  - Allows users to:
    - Filter data by Name.
    - Sort data by Name or Budget Per Person in ascending or descending order.
    - Delete individual bookings.

### Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running
- [Git](https://git-scm.com/) installed

#### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd travel-booking-app
Install dependencies for both the frontend and backend:

# Navigate to the frontend directory
    cd frontend
    npm install

# Navigate to the backend directory
    cd ../backend
    npm install

# Configure Environment Variables:

Create a .env file in the backend directory and set the following variables:

makefile
Copy code
PORT=5000
MONGODB_URI=<Your MongoDB URI>
Start the Application:

# In the backend directory
    npm start

# In the frontend directory
    npm start

Access the application in your web browser at http://localhost:3000.

