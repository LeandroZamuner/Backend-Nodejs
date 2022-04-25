const faker = require('faker');
const boom = require('@hapi/boom');

class categoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        Image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newcategories = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.categories.push(newcategories);
    return newcategories;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 4000);
    });
  }

  async findOne(id) {
    const product = this.categories.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('products not found');
    }
    if (product.isBlock) {
      throw boom.conflict('products is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('products not found');
    }
    const product = this.categories[index];
    this.categories[index] = {
      ...product,
      ...changes,
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('products not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = categoriesService;
