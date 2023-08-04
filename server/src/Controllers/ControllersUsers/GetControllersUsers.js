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
  const user = Usuarios.findByPk(id);

  if(!user) throw new Error(`User with id ${id} not found`);

  return user;
};

module.exports = {getControllerUser, getControllerUserByEmail, getUserId};
