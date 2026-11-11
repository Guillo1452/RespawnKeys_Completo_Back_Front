const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

const angularDistPath = path.join(__dirname, '../dist/respawn-keys/browser');
app.use(express.static(angularDistPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(angularDistPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor de Respawn Keys corriendo en http://localhost:${PORT}`);
});

