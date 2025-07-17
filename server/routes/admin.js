const express = require('express');
const router = express.Router();
const Soil = require('../models/Soil');
const Distributor = require('../models/Distributor');

// Hardcoded admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123'
};

// Admin Login Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/post-soil', async (req, res) => {
  try {
    const { type, location, nutrients } = req.body;
    const newSoil = new Soil({ type, location, nutrients });
    await newSoil.save();
    res.status(201).json({ message: 'Soil data posted successfully' });
  } catch (err) {
    console.error('❌ Error saving soil data:', err);
    res.status(500).json({ message: 'Failed to post soil data', error: err.message });
  }
});



router.post('/post-distributor', async (req, res) => {
  try {
    const { name, location, contact } = req.body;

    if (!name || !location || !contact) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newDistributor = new Distributor({ name, location, contact });
    await newDistributor.save();

    res.status(201).json({ message: 'Distributor saved successfully' }); // ✅ THIS LINE
  } catch (err) {
    console.error('❌ Error saving distributor:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});




module.exports = router;
