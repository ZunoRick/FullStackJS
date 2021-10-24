const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//Crear el servidor
const servidor = express();

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