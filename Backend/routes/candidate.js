// Import necessary modules and dependencies
const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate.model'); // Assuming your Candidate model is defined in candidate.js

// Route for adding a new candidate
router.post('/add', async (req, res) => {
  try {
    // Extract candidate data from the request body
    const { username, department, position } = req.body;

    // Validate the incoming data (You can use a validation library like Joi or validate manually)
    if (!username || !department || !position) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new candidate document
    const candidate = new Candidate({
      username,
     department,
      position
    });

    // Save the candidate document to the database
    await candidate.save();

    // Respond with success message
    res.status(201).json({ message: 'Candidate added successfully', candidate });
  } catch (error) {
    // Handle errors
    console.error('Error adding candidate:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//fetch 
router.get('/read', async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates.reverse());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get('/voter', async (req, res) => {
  try {
    const candidates = await Candidate.find();

    res.json(candidates.reverse());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes for updating, deleting, or fetching candidates if needed

// Export the router to make it available in other files
module.exports = router;
