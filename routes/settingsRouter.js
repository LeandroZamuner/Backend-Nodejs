const express = require('express');
const settingsService = require('../services/settingsService');

const router = express.Router();
const services = new settingsService();

router.get('/', async (req, res) => {
  const products = await services.find();
  res.json(products);
});

module.exports = router;
