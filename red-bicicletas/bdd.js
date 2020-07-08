var mongoose = require('mongoose');

var mongodb = 'mongodb://localhost/red_bicicletas';  // Link de conexion

mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }); // Conexion
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error tratando de conectar'));
