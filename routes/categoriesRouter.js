const express = require('express');

const categoriesService = require('./../services/categoriesService');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../shemas/productShemas');

const services = new categoriesService();
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await services.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
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

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await services.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await services.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.delete(id);
  res.json(rta);
});

module.exports = router;
