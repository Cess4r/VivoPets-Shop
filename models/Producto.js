const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    categoria:{
        type: String,
        required: true
    },
    presentacion:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precio_venta:{
        type: Number,
        required: true
    },
    calificacion:{
        type: Number,
        required: true
    },
    comentarios:{
        type: Array,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto', productoSchema );