// usuarioController.js

// Importa el modelo de usuario si es necesario
const Usuario = require('../models/Usuario');

// Controlador para manejar la creación de cuentas de usuario
exports.homeUsuario = async (req, res) => {
    res.render('homeUsuario', {
        nombrePagina: 'MyCompany',
        tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
        menu: false,
        barraIzquierda: false,
        barraDerecha: false,
        authenticacion: false,
        inicioSesion: true,
        crearCuenta: true,
        barra: true,
        boton: true
    });
};



// Controlador para manejar la creación de cuentas de usuario
exports.homeUsuarioDentro = (req, res) => {
            res.render('homeUsuario', {
            nombrePagina: 'MyCompany',
            tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
            menu: false,
            barraIzquierda: false,
            barraDerecha: false,
            authenticacion: false,
            inicioSesion: true,
            crearCuenta: true,
            barra: true,
            boton: true
        });

   
};