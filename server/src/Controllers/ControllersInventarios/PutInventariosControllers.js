const { Inventarios } = require("../../DB");

const actualizarArticulo = async (id, data) => {
  try {
    await Inventarios.update(data, {
      where: { id_inventory: id },
    });
    const articulo = await Inventarios.findByPk(id);
    return articulo;
  } catch (error) {
    return error;
  }
};

module.exports = {
  actualizarArticulo,
};
