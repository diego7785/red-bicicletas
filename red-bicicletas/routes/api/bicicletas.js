var express = require('express');
var router = express.Router();
var bicicletaController = require('../../controllers/api/bicicletasControllerAPI');

router.get('/', bicicletaController.bicicleta_list);

router.post('/create', bicicletaController.bicicleta_create);

router.post('/delete', bicicletaController.bicicleta_delete);
module.exports = router;