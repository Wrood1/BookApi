const db = require('../config/database');

const Perfume = {
  create: function (newPerfume, callback) {
    return db.query(
      'INSERT INTO product (name, price, reviews, perfumeType, image,username) VALUES (?, ?, ?, ?, ?,?)',
      [newPerfume.name, newPerfume.price, newPerfume.reviews, newPerfume.type, newPerfume.image,newPerfume.username],
      callback
    );
  },
  getAll: function (callback) {
    return db.query('SELECT * FROM product', callback);
  },
};

module.exports = Perfume;
