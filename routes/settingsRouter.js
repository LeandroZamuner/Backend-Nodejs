const express = require('express');
const settingsService = require('../services/settingsService');

const router = express.Router();
const services = new settingsService();

router.get('/', async (req, res) => {
  const menu = await services.find();
  res.json(menu);
});

module.exports = router;
