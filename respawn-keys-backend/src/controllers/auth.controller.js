const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Usuario mock temporal de pruba
const usuarioDemo ={
  id:'101',
  email:'admin@respawnkeys.com',
  // cifrado de "123456"
  passwordHash: '$2a$10$wN9a3xKkG9zB2yQ.0wN0.eX4H8J1vQ9eX4H8J1vQ9eX4H8J1vQ9e'
};

const login = async (req, res)=>{
  const{email, password }= req.body;

  if (email !== usuarioDemo.email){
    return res.status(400).json({exito: false, mensaje:'Usuario no encontrado'});
  }

  //General el token JWT si las credenciales coinciden
  const token=jwt.sign(
    { id: usuarioDemo.id, email: usuarioDemo.email, rol: 'admin'},
    process.env.JWT_SECRET,
    {expiresIn: '8h'}
  );

  return res.json({
    exito: true,
    mensaje: 'Autenticación exitosa',
    token: token,
    usuario: { id: usuarioDemo.id, email: usuarioDemo.email, rol: 'admin'}
  });
};

module.exports = { login };