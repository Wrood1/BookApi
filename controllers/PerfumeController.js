const Perfume = require('../models/perfumeModel');

const addPerfume = (req, res) => {
  const { perfumeName, price, reviews, perfumeType } = req.body;
  const perfumeImage = req.file.filename;

  const newPerfume = {
    name: perfumeName,
    price: price,
    reviews: reviews,
    type: perfumeType,
    image: perfumeImage,
    username: req.session.username,
  };

  Perfume.create(newPerfume, (err, result) => {
    if (err) {
      console.error('Error saving perfume to the database:', err);
      res.redirect('/add?success=false');
    } else {
      console.log('Perfume added successfully');
      res.redirect('/add?success=true');
    }
  });
};

const getAllProducts = (req, res) => {
    Perfume.getAll((err, perfumes) => {
      if (err) {
        console.error('Error fetching perfumes from the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(perfumes);
      }
    });
  };

module.exports = {
  addPerfume,
  getAllProducts,
};
