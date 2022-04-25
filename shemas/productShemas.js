const Joi = require('joi');

const id = Joi.string().uuid(); /// tipo de campo y despues la validacion
const name = Joi.string().uuid().min(3).max(15);
const icon = Joi.number().integer().min(10);
const link = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  icon: icon.required(),
  link: link.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  icon: icon,
  link: link,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
