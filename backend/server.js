const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' }); // Sending JSON response
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
