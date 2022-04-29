const express = require('express');
const settingsService = require('../services/settingsService');

const router = express.Router();
const services = new settingsService();

router.get('/', (req, res) => {
  const menu = services.find();
  res.json(menu);
});

module.exports = router;
