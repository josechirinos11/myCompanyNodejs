const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const usuarioController = require('../controllers/usuarioController');

module.exports = () => {
    router.get('/', homeController.home);
    router.get('/iniciar-sesion', (req, res) => {
        homeController.homeInicio(req, res, 'iniciar-sesion'); // Pasar una identificación de página a la función del controlador
    });
    router.get('/crear-cuenta', (req, res) => {
        homeController.homeInicio(req, res, 'crear-cuenta'); // Pasar una identificación de página a la función del controlador
    });
    router.get('/usuario', usuarioController.homeUsuarioDentro);
    router.post('/crear-cuenta', usuarioController.homeUsuario);

    return router;
}
