const {Usuarios, Favoritos, Inventarios, Reviews} = require('../../DB.js');

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
  try {
    const user = await Usuarios.findByPk(id, {
      include: [
        {
          model: Favoritos,
          as: 'favoritos',
        },
        {
          model: Inventarios,
        },
      ],
    });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getControllerUser,
  getControllerUserByEmail,
  getUserId,
};
