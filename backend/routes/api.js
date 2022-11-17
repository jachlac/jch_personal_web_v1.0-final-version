var express = require('express');
var router = express.Router();
var updatesModel = require('../models/updatesModel')
var cloudinary = require('cloudinary').v2;

router.get('/updates', async function (req, res, next) {

  var updates = await updatesModel.getUpdates();

  updates = updates.map(updates => { //con el .map genero el nuevo array
    if (updates.img_id) {
      const image = cloudinary.url(updates.img_id, {
        width: 500,
        height: 500,
        crop: 'fill'
      });
      return {
        ...updates,
        image
      }
    } else {
      return {
        ...updates,
        image: ''
      }
    }
  });

  res.json(updates); // aca la respuesta es un JSON, en lugar de render, para react es la forma de recibirlo y trabajarlo dentro del diseño
});

module.exports = router;
