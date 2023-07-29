const { Usuarios, Favoritos, Inventarios } = require("../../DB.js");

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
  const user = await Usuarios.findByPk(id, {
    include: [
      {
        model: Favoritos,
        as: "favoritos",
        include: [
          {
            model: Inventarios,
            as: "inventarios",
          },
        ],
      },
    ],
  });
  return user;
};

module.exports = {
  getControllerUser,
  getControllerUserByEmail,
  getUserId,
};
