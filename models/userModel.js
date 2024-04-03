const pool = require('../config/database');

class UserModel {
  static createUser(email, name, password) {
    return pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [name, email, password]);
  }

  static getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      pool.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length > 0 && 'password' in results[0]) {
            resolve(results[0]);
          } else {
            resolve(null);
          }
        }
      });
    });
  }
}

module.exports = UserModel;
