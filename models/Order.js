const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define(
  'Order',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      associations: {
        model: 'User',
        key: '_id',
      },
    },
    orderItemsName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderItemsQty: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    orderItemsImage: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderItemsPrice: {
      type: Sequelize.DECIMAL(11, 2),
      allowNull: false,
    },
    orderItemsProduct: {
      type: {
        associations: {
          model: 'Product',
          key: '_id',
        },
      },
      allowNull: false,
    },
    shippingAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shippingCity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shippingPostalCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    shippingCountry: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paymentResultId: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    paymentResultStatus: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paymentResultUpdateTime: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paymentResultEmail: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    taxPrice: {
      type: Sequelize.DECIMAL(11, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    shippingPrice: {
      type: Sequelize.DECIMAL(11, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    totalPrice: {
      type: Sequelize.DECIMAL(11, 2),
      allowNull: false,
      defaultValue: 0.0,
    },
    isPaid: {
      type: Sequelize.BOOLEAN(false),
      allowNull: false,
      defaultValue: false,
    },
    paidAt: {
      type: Sequelize.DATE,
    },
    isDelivered: {
      type: Sequelize.BOOLEAN(false),
      allowNull: false,
      defaultValue: false,
    },
    deliveredAt: {
      type: Sequelize.DATE,
    },
  },
  {
    timestapms: true,
  }
);

module.exports = Order;
