const express = require('express');
const { createTicket, getUserTickets } = require('../controllers/customerServiceController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/tickets', authMiddleware, createTicket);
router.get('/tickets', authMiddleware, getUserTickets);

module.exports = router;
