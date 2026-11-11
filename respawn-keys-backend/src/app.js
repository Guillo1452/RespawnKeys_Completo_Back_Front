const express = require('express');
const cors = require('cors');
const path = require('path'); // Módulo nativo de Node.js
require('dotenv').config();

const apiRoutes = require('./routes/api.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 1. Servir las rutas de la API de Express
app.use('/api', apiRoutes);

// 2. Servir los archivos estáticos de la app de Angular compilada
// Ajusta la ruta relativa para apuntar a la carpeta dist de tu frontend
app.use(express.static(path.join(__dirname, '../../Respawn_Keys/dist/respawn-keys/browser')));

// 3. Cualquier otra ruta que no sea /api entregará el index.html de Angular (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../Respawn_Keys/dist/respawn-keys/browser/index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor de Respawn Keys corriendo en http://localhost:${PORT}`);
});