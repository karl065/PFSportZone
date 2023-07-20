const {Usuarios} = require('../../DB.js');

const putUsuarios = async (updateData, id) => {
  try {
    await Usuarios.update(updateData, {
      where: {idUser: id},
    });
    const usuario = await Usuarios.findByPk(id);
    return usuario;
  } catch (error) {
    return error;
  }
};

module.exports = {putUsuarios};
