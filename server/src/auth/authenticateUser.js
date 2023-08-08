const {Usuarios, Carrito, Ventas} = require('../DB.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {SECRETA} = process.env;

/**
 * La función `authenticateUser` es una función asíncrona que toma un correo electrónico y una
 * contraseña como parámetros, y autentica al usuario al verificar si el correo electrónico y la
 * contraseña coinciden con un usuario en la base de datos, y si lo hacen, genera un token web JSON
 * (JWT). ) para el usuario.
 * @param email - El parámetro de correo electrónico es la dirección de correo electrónico del usuario
 * que intenta autenticarse.
 * @param password - El parámetro `contraseña` es la contraseña ingresada por el usuario para la
 * autenticación.
 * @returns una promesa que se resuelve en un token si el usuario se autentica correctamente. Si el
 * usuario o la contraseña son incorrectos, devuelve un objeto con un mensaje que indica el error. Si
 * hay un error durante la creación del token, rechaza la Promesa con un objeto que contiene un mensaje
 * de error. Si hay un error durante la ejecución de la función, devuelve el mensaje de error.
 */
const authenticateUser = async (email, password) => {
  try {
    const user = await Usuarios.findOne({
      where: {email: email},
      include: [
        {model: Carrito, as: 'carrito'},
        {
          model: Ventas,
          as: 'ventas',
        },
      ],
    });
    const passwordValid = await bcryptjs.compare(password, user.password);

    if (!user || !passwordValid) {
      throw new Error('Usuario o email incorrectos');
    }

    const payload = {
      user: {id: user.idUser},
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
          const auth = {
            token,
            id: user.idUser,
            email: user.email,
            role: user.role,
            carrito: user.carrito,
            ventas: user.ventas,
          };
          resolve(auth);
        }
      );
    });
  } catch (error) {
    return error.message;
  }
};

module.exports = {authenticateUser};
