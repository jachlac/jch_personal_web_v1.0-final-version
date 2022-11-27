var express = require('express');
var router = express.Router();
var updatesModel = require('../models/updatesModel')
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/db');

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


router.post('/contact', async (req, res) => {
  const mail = {
    to: 'cryptostate.1980@gmail.com',
    subject: 'Web contact',
    html: ` ${req.body.name} had contact through the website, and wants more information to this email: ${req.body.email} <br> Also made the following comment: ${req.body.message} <br> His phone is: ${req.body.phone}`
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail)

  res.status(201).json({
    error: false,
    message: 'message send' //mando la propiedad de mensaje para asegurarme que se envio correctamente
  });
});

module.exports = router;
