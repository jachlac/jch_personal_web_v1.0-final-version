var express = require('express');
var router = express.Router();
var updatesModel = require('../../models/updatesModel')
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); //util me facilita la subida de las imagenes
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */


router.get('/', async function (req, res, next) {

  var updates = await updatesModel.getUpdates();

  updates = updates.map(update => {
    if (update.img_id) {
      const image = cloudinary.image(update.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...update,
        image
      }
    } else {
      return {
        ...update,
        image: ''
      }
    }
  });

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

    var img_id = ''; //esta variable arranca vacia, porque puede ser el caso de que no subi imagen en la noticia
    if (req.files && Object.keys(req.files).length > 0) { //si hay un archivo y tiene un nombre no nulo, entonces capturo la variable imagen
      image = req.files.image;
      img_id = (await uploader(image.tempFilePath)).public_id;
    }

    console.log(req.body)
    if (req.body.tittle != "" && req.body.subtittle != "" && req.body.body != "") {
      await updatesModel.insertNew({
        ...req.body, //spread > titulo, subtitulo y cuerpo
        img_id
      });
      res.redirect('/admin/updates')
    } else {
      res.render('admin/new', {
        layout: 'admin/layout',
        error: true,
        message: 'All fields are required'
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

router.get('/delete/:id', async (req, res, next) => {
  var id = req.params.id; //capturo el valor del id, lo guardo en la variable y lo paso en el await de mas abajo

  var update = await updatesModel.getUpdatesById(id);
  if (update.img_id) {
    await(destroy(update.img_id));
  }

  await updatesModel.deleteNewsById(id);
  res.redirect('/admin/updates')
})


router.get('/modify/:id', async (req, res, next) => { //carga el formulario con los datos del ID
  var id = req.params.id;
  var update = await updatesModel.getUpdatesById(id);
  res.render('admin/modify', {
    layout: 'admin/layout',
    update
  });
});

router.post('/modify', async (req, res, next) => { // cuando envio a traves del metodo post el /modify desencadena la funcion
  try {

    let img_id = req.body.img_original; //me trae la imagen original, que puede estar o no
    let delete_old_img = false;
    if (req.body.image_delete === '1') {
      img_id = null;
      delete_old_img = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) { //de no darse el if, si recibo una nueva imagen (req.files = true) y el nombre es valido, capturo la imagen en una variable
        image = req.files.image; //capturo nueva imagen
        img_id = (await uploader(image.tempFilePath)).public_id; //subo nueva imagen
        delete_old_img = true; //elimino imagen anterior si existia
      }
    }
    if (delete_old_img && req.body.img_original) { //si tilde eliminar la imagen y a su vez existia una, la elimina
      await (destroy(req.body.img_original));
    }


    var obj = {
      tittle: req.body.tittle,
      subtittle: req.body.subtittle,
      body: req.body.body,
      img_id //sumo la imagen y asi la procesa en el objeto
    }
    //hago console.log para chequear si me esta trayendo el ID y los datos
    // console.log(obj),cd backend
    // console.log(req.body.id)

    await updatesModel.modifyUpdatesById(obj, req.body.id);
    res.redirect('/admin/updates');

  } catch (error) {
    console.log(error)
    res.render('admin/modify', {
      layout: 'admin/layout',
      error: true,
      message: 'Couldnt modify the Update'
    });
  }

});

module.exports = router;