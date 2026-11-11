const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // Formato del header: "Bearer TOKEN_AQUÍ"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      exito: false, 
      mensaje: 'Acceso denegado: Se requiere un token autorizado' 
    });
  }

  try {
    const usuarioVerificado = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = usuarioVerificado; // Adjuntamos los datos del usuario a la petición
    next(); // Continuamos a la ruta
  } catch (error) {
    return res.status(403).json({ 
      exito: false, 
      mensaje: 'Token inválido o expirado' 
    });
  }
};

module.exports = { verificarToken };
