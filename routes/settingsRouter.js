const express = require('express');
const settingsService = require('../services/settingsService');
const validatorHandler = require('../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../shemas/productShemas');

const router = express.Router();
const services = new settingsService();

router.get('/', async (req, res) => {
  const products = await services.find();
  res.json(products);
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await services.findOne(id);
      res.json(product);
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await services.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  '/:id',
  validatorHandler(createProductSchema, 'body'),
  validatorHandler(updateProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { name } = req.params;
      const body = req.body;
      const product = await services.update(name, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.delete(id);
  res.json(rta);
});

module.exports = router;
