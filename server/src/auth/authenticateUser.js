const {Usuarios} = require('../DB.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRETA} = process.env;

const authenticateUser = async (email, password) => {
  try {
    const user = await Usuarios.findAll({
      where: {email: email},
      raw: true,
    });
    if (!user) {
      return {msg: 'Usuario o Password incorrecto'};
    }
    const passwordValid = await bcryptjs.compare(password, user[0].password);

    if (!passwordValid) {
      return {msg: 'Usuario o Password incorrecto'};
    }

    const payload = {
      user: {id: user[0].id},
    };

    return new Promise((resolve, reject) => {
      jwt.sign(
        payload,
        SECRETA,
        {
          expiresIn: '30d',
        },
        (err, token) => {
          if (err) {
            reject({msg: 'Error al crear el Token'});
          }
          resolve(token);
        }
      );
    });
  } catch (error) {
    return error.message;
  }
};

module.exports = {authenticateUser};
