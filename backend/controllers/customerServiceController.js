const Ticket = require('../models/Ticket');

// Create a support ticket
const createTicket = async (req, res) => {
  try {
    const { subject, message } = req.body;
    const ticket = new Ticket({ user: req.user.id, subject, message });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tickets for a user
const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTicket, getUserTickets };
