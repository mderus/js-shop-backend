const {v4: uuid} = require('uuid');
const {pool} = require('../config/db');

class userRecord {
  constructor(user) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.isAdmin = user.isAdmin;
  }

  static async findOne(email) {
    const [results] = await pool.execute(
      'SELECT * FROM users WHERE `email` = :email',
      {email}
    );
    return results.length === 0 ? null : new userRecord(reuslts[0]);
  }

  static async createUser() {
    if (!this._id) {
      this._id = uuid();
    }

    await pool.execute(
      'INSERT INTO `users`(`_id, `name`, `email`, `password`, `isAdmin`) VALUES (:_id, :email, :name, :email, :password, :isAdmin)',
      {
        _id: this._id,
        name: this.name,
        email: this.email,
        password: this.password,
        isAdmin: this.isAdmin,
      }
    );
  }

  async registerUser() {}
}

module.exports = {
  userRecord,
};
