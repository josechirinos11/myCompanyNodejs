const mongoose = require('mongoose')
require('./config/db')


const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes')

// para mantener sesion
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
//const bodyParser = require('body-parser');
//const expressValidator = require('express-validator');
//const flash = require('connect-flash');
//const createError = require('http-errors');
//const passport = require('./config/passport');


require('dotenv').config({ path: 'variables.env'})

const { GraphQLClient, gql } = require('graphql-request');

const app = express();
const graphQLClient = new GraphQLClient('http://localhost:4000/');



// habilitar handlebars como view
app.engine('handlebars',
    exphbs.engine({
        defaultLayout: 'layout'
    })
);
app.set('view engine', 'handlebars');

// static files
// se usa para leer la direccion y extraerla de los archivos estaticos y demas
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());

app.use(session({
    secret: process.env.SECRETO, // Establece tu secreto aquí
    resave: false, // Define si se debe volver a guardar la sesión incluso si no se ha modificado
    saveUninitialized: false, // Define si se debe guardar una sesión no inicializada
    store: MongoStore.create({
        mongoUrl: process.env.DATABASE, // Url de tu base de datos Mongo
        mongoOptions: true // Opciones de configuración para la conexión a MongoDB
    })
}));


// Parsea el cuerpo de las solicitudes con datos codificados en urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/', router());

const PORT = process.env.PORT || 5000;
const link = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Servidor listo en el puerto ${PORT}`);
    console.log(`Accede al servidor aquí: ${link}`);
});