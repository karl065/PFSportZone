const {Inventarios, Categorias} = require('../../DB');
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
  status,
  id_categories
) => {
  try {
    console.log(id_categories);
    const categoria = await getCategoryID(id_categories);
    console.log(categoria);
    if (!categoria) {
      return 'No existe la categoria';
    }
    await Inventarios.create({
      id_inventory,
      article_name,
      selling_price,
      purchase_price,
      stock,
      description,
      image,
      status,
      id_categories,
    });

    const nuevoArticulo = await Inventarios.findByPk(id_inventory, {
      include: [
        {
          model: Categorias,
          as: 'categorias',
        },
      ],
    });
    console.log(nuevoArticulo);
    return nuevoArticulo;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearArticulo,
};
