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
      allowNull: false,
      associations: {
        model: 'User',
        key: '_id',
      },
    },
    orderItems: [
      {
        name: {type: Sequelize.STRING(255), allowNull: false},
        qty: {type: Sequelize.NUMBER(2), allowNull: false},
        image: {type: Sequelize.STRING(255), allowNull: false},
        price: {type: Sequelize.DECIMAL(11, 2), allowNull: false},
        product: {
          type: {
            associations: {
              model: 'Product',
              key: '_id',
            },
          },
          allowNull: false,
        },
      },
    ],
    shippingAddress: {
      address: {type: Sequelize.STRING(255), allowNull: false},
      citry: {type: Sequelize.STRING(255), allowNull: false},
      postalCode: {type: Sequelize.STRING(255), allowNull: false},
      country: {type: Sequelize.STRING(255), allowNull: false},
    },
    paymentMethod: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    paymentResult: {
      id: {type: Sequelize.STRING(255)},
      status: {type: Sequelize.STRING(255)},
      update_time: {type: Sequelize.STRING(255)},
      email_address: {type: Sequelize.STRING(255)},
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
