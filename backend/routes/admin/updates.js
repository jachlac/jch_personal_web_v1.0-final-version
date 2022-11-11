var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('admin/updates', { //aca la ruta no va con barra al inicio
    layout:'admin/layout',
    persona: req.session.name
  });
});




module.exports = router;