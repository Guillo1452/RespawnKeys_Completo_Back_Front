const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/auth.middleware');
const authController = require('../controllers/auth.controller');
const juegosController = require('../controllers/juegos.controller');

// Rutas de Autenticación
router.post('/login', authController.login);

// Rutas CRUD de Juegos
router.get('/juegos', juegosController.obtenerJuegos);                                // GET Público
router.post('/juegos', verificarToken, juegosController.crearJuego);                 // POST Protegido
router.put('/juegos/:id', verificarToken, juegosController.actualizarJuego);          // PUT Protegido
router.delete('/juegos/:id', verificarToken, juegosController.eliminarJuego);       // DELETE Protegido

module.exports = router;