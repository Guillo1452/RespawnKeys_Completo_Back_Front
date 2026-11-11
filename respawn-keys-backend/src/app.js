const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api.routes')

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors()); // Permite peticiones desde Angular (localhost:4200)
app.use(express.json()); // Permite a Express entender JSON en el body

//prefijo /api para todas las rutas
app.use('/api',apiRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor de Respawn Keys funcionando correctamente' });
});

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en http://localhost:${PORT}`);
});