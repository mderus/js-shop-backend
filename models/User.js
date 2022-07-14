const Sequelize = require('sequelize');

module.exports = sequelize.define(
  'User',
  {
    _id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN(false),
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestapms: true,
  }
);
