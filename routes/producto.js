// Armamos las Rutas para  nuestro producto

const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// rutas CRUD

router.get('/', productoController.mostrarProductos);
router.post('/', productoController.crearProducto);
router.get('/:id', productoController.obtenerProducto);
router.put('/:id', productoController.actualizarProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;

