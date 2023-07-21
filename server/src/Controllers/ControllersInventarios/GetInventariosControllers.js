const { Inventarios } = require("../../DB");

const getInventarios = async () => {
  return await Inventarios.findAll();
};

const getInventariosByName = async (name) => {
  return await Inventarios.findAll({
    where: { article_name: name },
  });
};

const getInventariosById = async (id) => {
  return await Inventarios.findByPk(id);
};

module.exports = {
  getInventarios,
  getInventariosByName,
  getInventariosById,
};
