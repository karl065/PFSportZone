const {Inventarios, Categorias, Deportes} = require('../../DB');

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
    ],
  });
};

module.exports = {
  getInventarios,
  getInventariosByName,
  getInventariosById,
};
