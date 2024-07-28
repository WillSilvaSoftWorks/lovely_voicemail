const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/test-db-connection', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send('Connected to MongoDB successfully');
  } catch (error) {
    res.status(500).send('Error connecting to MongoDB: ' + error.message);
  }
});

module.exports = router;
