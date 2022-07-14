const Sequelize = require('sequelize');

module.exports = sequelize.define(
  'Product',
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
    name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    description: {
      type: Sequelize.DataTypes.STRING(255),
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    ammo: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    price: {
      type: Sequelize.DECIMAL(11, 2),
      allowNull: false,
    },
    countInStock: {
      type: Sequelize.INTEGER(2),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
