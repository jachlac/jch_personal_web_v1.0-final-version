var express = require('express');
var router = express.Router();
var userModel = require('../../models/userModel'); //controlador de los usuarios

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', { //aca la ruta no va con barra al inicio
    layout: 'admin/layout'
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy(); //destruyo la variable de sesion (id y usuario)
  res.render('admin/login', { //aca la ruta no va con barra al inicio
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var user = req.body.user; //captura la info
    var password = req.body.password;

    var data = await userModel.getUserByUsernameAndPassword(user, password);

    if (data != undefined) {
      req.session.id_user = data.id;
      req.session.name = data.user; //guarde la variable de sesion al entrar
      res.redirect('/admin/updates');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;