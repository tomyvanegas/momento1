const {Router} = require("express");
const router = Router();
const apiRoute = '/api';
const ModulosController = require('../Controllers/ModulosController');


//Resource Route Modulos

router.post(apiRoute+'/Modulos',ModulosController.create);

module.exports = router;
