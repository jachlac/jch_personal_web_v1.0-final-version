var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileupload = require('express-fileupload');
var cors = require('cors');


require('dotenv').config(); //indico que el proyecto va a trabajar con variables de entorno
var session = require('express-session'); // esto conviene ponerlo al principio para que lo cargue al iniciar

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/updates');
var apiRouter = require('./routes/api') //lo pongo al nivel del Index porque no es algo del admin


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//antes de los router hay que cargar session, sino nunca va a funcionar
app.use(session({
  secret: 'sapopepe',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

//validador de inicio de sesion
secured = async (req, res, next) => {
  try {
    console.log(req.session.id_user);
    if (req.session.id_user) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

app.use(fileupload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/updates', secured, adminRouter); // requiere validacion de usuario
app.use('/api', cors(), apiRouter);// le sumo la funcion cors que hace que pueda enviar y recibir los datos


// app.get('/admin/login', function (req,res){
//   res.send('Hola soy la pagina de inicio de sesion')

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
