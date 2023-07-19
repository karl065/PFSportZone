/* El código está importando el modelo `Usuarios` del archivo "../DB" y la biblioteca `bcryptjs`. */
const { Usuarios } = require("../../DB");
const bcryptjs = require("bcrypt");

/**
 * La función `validateUserPassword` verifica si el nombre o el correo electrónico de un usuario existe
 * en la base de datos y si la contraseña proporcionada coincide con la contraseña almacenada.
 * @param name - El parámetro de nombre es el nombre de usuario del usuario que intenta iniciar sesión.
 * @param email - El parámetro de correo electrónico se utiliza para verificar si existe un usuario con
 * el correo electrónico proporcionado en la base de datos.
 * @param password - El parámetro de contraseña es la contraseña que el usuario está tratando de
 * validar.
 * @returns la cadena "Autorizado...!!!" si el nombre de usuario o correo electrónico y la contraseña
 * son válidos.
 */
const validateUserPassword = async (name, email, password) => {
  let validation;

  if (name !== undefined) {
    validation = await Usuarios.findOne({ where: { name } });
  } else if (email !== undefined) {
    validation = await Usuarios.findOne({ where: { email } });
  } else {
    throw Error("You must provide the requested data...!");
  }

  if (!validation) {
    throw Error("Invalid username or password...!");
  }

  const authorized = await bcryptjs.compare(password, validation.password);

  if (!authorized) {
    throw Error("Invalid username or password...!");
  }

  return "Authorized...!!!";
};

module.exports = { validateUserPassword };
