const {Inventarios, Categorias} = require('../../DB');

const getInventarios = async () => {
  return await Inventarios.findAll({
    include: [
      {
        model: Categorias,
        as: 'categorias',
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
    ],
  });
};

module.exports = {
  getInventarios,
  getInventariosByName,
  getInventariosById,
};
