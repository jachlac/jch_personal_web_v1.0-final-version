var express = require('express');
var router = express.Router();
var updatesModel = require('../../models/updatesModel')
/* GET home page. */


router.get('/', async function (req, res, next) {

  var updates = await updatesModel.getUpdates();

  res.render('admin/updates', { //aca la ruta no va con barra al inicio
    layout: 'admin/layout',
    persona: req.session.name,
    updates
  });
});


router.get('/new', async function (req, res, next) {

  res.render('admin/new', { //aca la ruta no va con barra al inicio
    layout: 'admin/layout',
  });
});


router.post('/new', async (req, res, next) => {
  try {
    console.log(req.body)
    if (req.body.tittle != "" && req.body.subtittle != "" && req.body.body != "") {
      await updatesModel.insertNew(req.body);
      res.redirect('/admin/updates')
    } else {
      res.render('admin/new', {
        layout: 'admin/layout',
        error: true,
        message: 'todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/new', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargaron las novedades'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) =>{
  var id = req.params.id; //capturo el valor del id, lo guardo en la variable y lo paso en el await de mas abajo

  await updatesModel.deleteNewsById(id);
  res.redirect('admin/updates');
})


module.exports = router;