const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const testDbConnectionRoute = require('./routes/dbTest'); // Adjust the path as needed



const app = express();
const port = process.env.PORT || 5001;
const mongoUrl = process.env.MONGO_URL;


app.use(cors());

// Database connection
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
app.use('/api', testDbConnectionRoute);


app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' }); // Sending JSON response
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


