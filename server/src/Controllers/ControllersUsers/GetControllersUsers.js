const {Usuarios} = require('../../DB.js');

const getControllerUser = async () => {
  return await Usuarios.findAll();
};

const getControllerUserByEmail = async (email) => {
  return await Usuarios.findAll({
    where: {
      email: email,
    },
  });
};

const getUserId = async (id) => {
  return await Usuarios.findByPk(id);
};

module.exports = {getControllerUser, getControllerUserByEmail, getUserId};
