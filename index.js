


const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const router = require('./routes')

const app = express();



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




app.use('/', router());


app.listen(5000);