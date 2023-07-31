const {Inventarios, Categorias, Deportes, Marcas} = require('../../DB');

const getInventarios = async () => {
  return await Inventarios.findAll({
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
};

const getInventariosByName = async (name) => {
  return await Inventarios.findAll({
    where: {article_name: name},
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
};

const getInventariosById = async (id) => {
  return await Inventarios.findByPk(id, {
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
};

module.exports = {
  getInventarios,
  getInventariosByName,
  getInventariosById,
};
