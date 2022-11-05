const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombre_u: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    salt: {
        type: String,
        /* required: true */
    },
    direccion_envio: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    depto: {
        type: String,
        required: true
    },
    pais: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Usuario', productoSchema );
