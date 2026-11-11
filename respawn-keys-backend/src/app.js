const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/api.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Servidor de Respawn Keys funcionando correctamente' });
});

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor de Respawn Keys corriendo en el puerto ${PORT}`);
});