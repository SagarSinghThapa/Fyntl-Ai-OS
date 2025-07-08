const express = require('express');
const router = express.Router();
const Email = require('../models/Email');

// GET all emails - This is what your React component will use
router.get('/', async (req, res) => {
  try {
    const emails = await Email.find().sort({ submittedAt: -1 });
    res.json(emails);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST new email - For submitting emails
router.post('/', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Check if email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    
    // Create new email entry
    const newEmail = new Email({ email });
    await newEmail.save();
    
    res.status(201).json({ message: 'Email submitted successfully', email: newEmail });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;