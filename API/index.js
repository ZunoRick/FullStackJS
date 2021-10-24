const express = require('express');
const mongoose = require('mongoose');

//Crear el servidor
const servidor = express();

//Conectar a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Puerto y arrancar el servidor 
servidor.listen(4000, () =>{
    console.log('Servidor Funcionando');
});