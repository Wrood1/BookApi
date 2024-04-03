const db = require('../config/database');

const contactUs = {
  create: function (newContact, callback) {
    return db.query(
      'INSERT INTO contact_us (first_name, last_name, mobile, date_of_birth, gender, language, message) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [newContact.first_name, newContact.last_name, newContact.mobile, newContact.date_of_birth, newContact.gender, newContact.language, newContact.message],
      callback
    );
  }
};

module.exports = contactUs;
