const express = require('express');
const router = express.Router();
const Distributor = require('../models/Distributor'); // ✅ your model

// GET all distributor data
router.get('/', async (req, res) => {
  try {
    const distributors = await Distributor.find();
    res.json(distributors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching distributor data', error: err.message });
  }
});

module.exports = router;
