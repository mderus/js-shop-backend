module.exports = async () => {
  // const Product = require('../models/Product');
  // const User = require('../models/User');
  const Order = require('../models/Order');
  // const bcrypt = require('bcryptjs');
  const {v4: uuid} = require('uuid');
  // User.hasMany(Product, {as: 'Products', foreignKey: 'user'});
  // Product.belongsTo(User, {as: 'Users', foreignKey: 'user'});
  const errHandler = (err) => {
    console.error('Error: ', err);
  };
  // const user = await User.create({
  //   name: 'Jane Doe',
  //   email: 'jane@example.com',
  //   password: bcrypt.hashSync('123456', 10),
  // }).catch(errHandler);
  // const product = await Product.create({
  //   _id: uuid(),
  //   userId: 'a829add5-e368-45c6-b597-715505bc5ba5',
  //   name: 'Taurus T4 Classic',
  //   image: '/images/taurust4.jpg',
  //   description:
  //     'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud verit.',
  //   brand: 'Taurus',
  //   category: 'Rifle',
  //   ammo: '5,56x45mm / .223 Rem',
  //   price: 2459.99,
  //   countInStock: 3,
  // }).catch(errHandler);

  await Order.create({
    _id: uuid(),
    userId: 'cca4c926-4661-4018-a9f1-362cca5b8b6e',
    orderItems: [
      {
        name: 'Taurus T4',
        qty: 1,
        image: '/images/taurust4.jpg',
        price: 2459.99,
        product: 'bcb581f4-8328-467e-a069-0f4cca62810f',
      },
    ],
    shippingAddress: [
      {
        address: '57 Color St',
        citry: 'New York',
        postalCode: '00111',
        country: 'USA',
      },
    ],
    paymentMethod: '',
    paymentResult: [
      {
        id: '',
        status: '',
        update_time: '',
        email_address: '',
      },
    ],
    taxPrice: 0,
    shippingPrice: 0,
    totalPrice: 2459.99,
    isPaid: 0,
    paidAt: '',
    isDelivered: 0,
    deliveredAt: 0,
  }).catch(errHandler);
};
