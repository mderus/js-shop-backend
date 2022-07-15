const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcryptjs');

const User = sequelize.define(
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

User.addHook(
  'beforeCreate',
  async (user) => (user.password = await bcrypt.hash(user.password, 10))
);

User.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// User.beforeCreate((user, options) => {
//   return bcrypt
//     .hash(user.password, 10)
//     .then((hash) => {
//       user.password = hash;
//     })
//     .catch((error) => {
//       throw new Error();
//     });
// });

User.pre;

module.exports = User;
