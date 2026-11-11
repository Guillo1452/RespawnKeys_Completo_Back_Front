const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/auth.middleware');
const juegosController = require('../controllers/juegos.controller');

// Rutas públicas (cualquier visitante de Respawn Keys las puede consultar)
router.get('/juegos', juegosController.obtenerJuegos);
router.get('/juegos/:id', juegosController.obtenerJuegoPorId);

// Rutas protegidas por JWT (Solo admin o usuarios autenticados)
router.post('/juegos', verificarToken, juegosController.crearJuego);
router.put('/juegos/:id', verificarToken, juegosController.actualizarJuego);
router.delete('/juegos/:id', verificarToken, juegosController.eliminarJuego);

module.exports = router;