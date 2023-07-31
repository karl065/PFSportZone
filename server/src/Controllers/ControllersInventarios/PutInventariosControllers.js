const {Inventarios, Categorias, Deportes, Marcas} = require('../../DB');

const actualizarArticulo = async (id, data) => {
  try {
    await Inventarios.update(data, {
      where: {id_inventory: id},
    });
    const articulo = await Inventarios.findByPk(id, {
      include: [
        {
          model: Categorias,
          as: 'categorias',
        },
        {
          model: Deportes,
          as: 'deportes',
        },
        {
          model: Marcas,
          as: 'marcas',
        },
      ],
    });
    return articulo;
  } catch (error) {
    return error;
  }
};

module.exports = {
  actualizarArticulo,
};
