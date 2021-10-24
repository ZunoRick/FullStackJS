const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//Crear el servidor
const servidor = express();

//Usando Cors para consulta desde una url definida
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) =>{
        // console.log(origin);
        const existe = whiteList.some( dominio => dominio === origin);
        if (existe) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
}

//Habilitar Cors
// servidor.use( cors(corsOptions) );
servidor.use(cors());

//Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Habilitar el body-parser
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: true }));

//Habilitar routing
servidor.use('/', routes());

//Puerto y arrancar el servidor 
servidor.listen(4000, () =>{
    console.log('Servidor Funcionando');
});