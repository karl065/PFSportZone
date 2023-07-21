const { Inventarios } = require("../../DB.js");

const eliminarArticulo = async (id) => {
  try {
    const articulo = await Inventarios.findByPk(id);
    await articulo.destroy({ where: { id_inventory: id } });
    return articulo;
  } catch (error) {
    return error.message;
  }
};

module.exports = { eliminarArticulo };
