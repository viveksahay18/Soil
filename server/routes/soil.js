const express = require('express');
const router = express.Router();
const Soil = require('../models/Soil');

// GET all soil data
router.get('/', async (req, res) => {
  try {
    const soils = await Soil.find();
    res.json(soils);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching soil data', error: err.message });
  }
});

module.exports = router;
