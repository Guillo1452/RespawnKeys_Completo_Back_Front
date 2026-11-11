// Base de datos temporal en memoria (JSON)
let juegosBD = [
  { id: 1, titulo: 'Grand Theft Auto VI', precio: 69.99, plataforma: 'PC / Console', stock: 15 },
  { id: 2, titulo: 'Cyberpunk 2077', precio: 29.99, plataforma: 'PC', stock: 40 }
];

// GET: Obtener todos los juegos (Público)
const obtenerJuegos = (req, res) => {
  res.json({ exito: true, datos: juegosBD });
};

// POST: Crear nuevo juego (Protegido)
const crearJuego = (req, res) => {
  const { titulo, precio, plataforma, stock } = req.body;
  
  const nuevoJuego = {
    id: juegosBD.length + 1,
    titulo,
    precio,
    plataforma,
    stock
  };

  juegosBD.push(nuevoJuego);
  res.status(201).json({ exito: true, mensaje: 'Juego agregado con éxito', datos: nuevoJuego });
};

// PUT: Actualizar juego (Protegido)
const actualizarJuego = (req, res) => {
  const { id } = req.params;
  const { titulo, precio, plataforma, stock } = req.body;

  const indice = juegosBD.findIndex(j => j.id === parseInt(id));
  if (indice === -1) {
    return res.status(404).json({ exito: false, mensaje: 'Juego no encontrado' });
  }

  juegosBD[indice] = { ...juegosBD[indice], titulo, precio, plataforma, stock };
  res.json({ exito: true, mensaje: 'Juego actualizado', datos: juegosBD[indice] });
};

// DELETE: Eliminar juego (Protegido)
const eliminarJuego = (req, res) => {
  const { id } = req.params;
  juegosBD = juegosBD.filter(j => j.id !== parseInt(id));
  res.json({ exito: true, mensaje: 'Juego eliminado del inventario' });
};

// Exportar las funciones para usarlas en api.routes.js
module.exports = { 
  obtenerJuegos, 
  crearJuego, 
  actualizarJuego, 
  eliminarJuego 
};