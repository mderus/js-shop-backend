const {v4: uuid} = require('uuid');
const {pool} = require('../config/db');

class ProductRecord {
  constructor(product) {
    this._id = product._id;
    this.userId = product.userId;
    this.name = product.name;
    this.image = product.image;
    this.description = product.description;
    this.brand = product.brand;
    this.category = product.category;
    this.price = product.price;
    this.countInStock = product.countInStock;
  }

  static async getProducts() {
    const [results] = await pool.execute('SELECT * FROM `products`');
    return results.map((obj) => new ProductRecord(obj));
  }

  static async getProductById(id) {
    const [results] = await pool.execute(
      'SELECT * FROM `products` WHERE `_id` = :id',
      {id}
    );
    return results.length === 0 ? null : new ProductRecord(results[0]);
  }
}

module.exports = {
  ProductRecord,
};
