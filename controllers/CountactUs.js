    const { validationResult } = require('express-validator');

    const contactUsModel = require('../models/contactUsModel');

    const addContactUs = (req, res) => {
    // Validation middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { firstName, lastName, mobile, dateOfBirth, gender, language, message } = req.body;

    const newContactUs = {
        first_name: firstName,
        last_name: lastName,
        mobile: mobile,
        date_of_birth: dateOfBirth,
        gender: gender,
        language: language,
        message: message,
    };

    contactUsModel.create(newContactUs, (err, result) => {
        if (err) {
        console.error('Error saving contactUs to the database:', err);
        res.redirect('/contact-us?success=false');
        } else {
        console.log('ContactUs added successfully');
        res.redirect('/contact-us?success=true');
        }
    });
    };

    module.exports = {
    addContactUs,
    };
