const {Inventarios, Categorias, Deportes, Marcas} = require('../../DB');
const {
  getCategoryID,
} = require('../ControllersCategorias/GetControllerCategory');

const crearArticulo = async (
  id_inventory,
  article_name,
  selling_price,
  purchase_price,
  stock,
  description,
  image,
  genre,
  stage,
  status,
  id_categories,
  idMarca,
  idDeportes
) => {
  try {
    const categoria = await getCategoryID(id_categories);
    if (!categoria) {
      return 'No existe la categoria';
    }
    await Inventarios.create({
      id_inventory,
      article_name,
      selling_price: Number(parseFloat(selling_price).toFixed(2)),
      purchase_price: Number(parseFloat(purchase_price).toFixed(2)),
      stock,
      description,
      image,
      genre,
      stage,
      status,
      id_categories,
      idMarca,
      idDeportes,
    });

    const nuevoArticulo = await Inventarios.findByPk(id_inventory, {
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
    return nuevoArticulo;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearArticulo,
};
