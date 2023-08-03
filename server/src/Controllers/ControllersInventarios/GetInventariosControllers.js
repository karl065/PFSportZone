const {
  Inventarios,
  Categorias,
  Deportes,
  Marcas,
  Reviews,
} = require("../../DB");

const getInventarios = async () => {
  return await Inventarios.findAll({
    include: [
      {
        model: Categorias,
        as: "categorias",
      },
      {
        model: Deportes,
        as: "deportes",
      },
      {
        model: Marcas,
        as: "marcas",
      },
      {
        model: Reviews,
        as: "reviews",
      },
    ],
  });
};

const getInventariosByName = async (name) => {
  return await Inventarios.findAll({
    where: { article_name: name },
    include: [
      {
        model: Categorias,
        as: "categorias",
      },
      {
        model: Deportes,
        as: "deportes",
      },
      {
        model: Marcas,
        as: "marcas",
      },
      {
        model: Reviews,
        as: "reviews",
      },
    ],
  });
};

const getInventariosById = async (id) => {
  return await Inventarios.findByPk(id, {
    include: [
      {
        model: Categorias,
        as: "categorias",
      },
      {
        model: Deportes,
        as: "deportes",
      },
      {
        model: Marcas,
        as: "marcas",
      },
      {
        model: Reviews,
        as: "reviews",
      },
    ],
  });
};

module.exports = {
  getInventarios,
  getInventariosByName,
  getInventariosById,
};
