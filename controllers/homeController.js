

exports.mostrarTrabajos = (req, res) => {

    res.render('home', {
        nombrePagina : 'MyCompany',
        tagline: 'Encuentra y Pública Trabajos para Desarrolladores Web',
        authenticacion: true,
        barra: true,
        boton: true
        
    })
}