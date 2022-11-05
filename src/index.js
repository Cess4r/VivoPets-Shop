const express = require('express');
const conectarDB = require('../config/db');
const cors = require ('cors');


const app = express();
const port = 7000;

// conectar DB
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/productos', require('../routes/producto'));
app.use('/api/usuarios', require('../routes/usuario'));


//muestra mensaje en el navegador 
//Rutas
app.get("/", (req,res) => {
    res.send("Bienvenidos esta configurado su servidor");
});

//Añadir para mi servidor escuche por un puerto
app.listen(port,() => console.log('El servidor esta conectado',port));