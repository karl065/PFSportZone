const {Usuarios} = require('../DB.js');

const authenticatedUser = async (idUser) => {
  try {
    const user = await Usuarios.findByPk(idUser);
    return user;
  } catch (error) {
    return error.message;
  }
};

module.exports = {authenticatedUser};
