const {Usuarios} = require('../../DB.js');

const putUser = async (updateData, id) => {
  try {
    await Usuarios.update(updateData, {
      where: {idUser: id},
    });
    const user = await Usuarios.findByPk(id);
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = {putUser};
