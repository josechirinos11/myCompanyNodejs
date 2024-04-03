

exports.home = (req, res) => {

    res.render('home', {
        nombrePagina : 'MyCompany',
        tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
        menu: false,
        barraIzquierda: false,
        barraDerecha: false,
        authenticacion: true,
        inicioSesion: true,
        crearCuenta: true,
        barra: true,
        boton: true
        
    })
    

} 

exports.iniciarSesion = (req, res) => {

   
    res.render('iniciarSesion', {
        nombrePagina : 'MyCompany',
        tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
        authenticacion: false,
        menu: false,
        barraIzquierda: false,
        barraDerecha: false,
        inicioSesion: true,
        crearCuenta: true,
        barra: true,
        boton: true
        
    })
    

}


exports.homeInicio = (req, res, page) => {
    const error = req.query.error;
    console.log('error:  ',req.query.error); // Imprime el mensaje de error en la consola
    let titulo1, titulo2, accion;


    // Establecer los valores según la página
    if (page === 'iniciar-sesion') {
        titulo1 = 'Iniciar';
        titulo2 = 'Sesión';
        accion = 'iniciar-sesion';
    } else if (page === 'crear-cuenta') {
        titulo1 = 'Crear';
        titulo2 = 'Cuenta';
        accion = 'crear-cuenta';
    }

    res.render('home', {
        nombrePagina: 'MyCompany',
        titulo1: titulo1,
        titulo2: titulo2,
        accion: accion,
        home: '',
        error: error,
        mensaje: null,
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


exports.homeCrear = (req, res) => {

  
    res.render('home', {
        nombrePagina : 'MyCompany',
       
        titulo1: 'Crear',
        titulo2: 'Cuenta',
        accion: 'crear-cuenta',
        home: '',

        menu: false,
        barraIzquierda: false,
        barraDerecha: false,
        authenticacion: false,
        inicioSesion: true,
        crearCuenta: true,
        barra: true,
        boton: true
        
    })

}


exports.crearCuenta = (req, res) => {

  
    res.render('crearCuenta', {
        nombrePagina : 'MyCompany',
        tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
        menu: false,
        barraIzquierda: false,
        barraDerecha: false,
        authenticacion: false,
        inicioSesion: true,
        crearCuenta: true,
        barra: true,
        boton: true
        
    })

}