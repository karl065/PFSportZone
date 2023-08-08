const { Usuarios } = require("../../DB.js");

const deleteUser = async (id) => {
  try {
    const user = await Usuarios.findByPk(id);
    await user.destroy({ where: { idUser: id } });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteUser };
