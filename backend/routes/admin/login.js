var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { //aca la ruta no va con barra al inicio
    layout:'admin/layout'
  });
});

module.exports = router;