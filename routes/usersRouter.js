const express = require('express');

const UsersService = require('./../services/usersService');
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('./../shemas/productShemas');

const router = express.Router();
const services = new UsersService();

router.get('/', async (req, res) => {
  const users = await services.find();
  res.json(users);
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
      const users = await services.findOne(id);
      res.json(users);
    } catch (err) {
      next(err);
    }
  }
);

router.post('/', async (req, res) => {
  const body = req.body;
  const newUsers = await services.create(body);
  res.status(201).json(newUsers);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const users = await services.update(id, body);
    res.json(users);
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
