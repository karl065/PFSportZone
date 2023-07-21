const { Inventarios } = require("../../DB");

const crearArticulo = async (
  id_inventory,
  article_name,
  selling_price,
  purchase_price,
  stock,
  description,
  image,
  status
) => {
  try {
    const nuevoArticulo = await Inventarios.create({
      id_inventory,
      article_name,
      selling_price,
      purchase_price,
      stock,
      description,
      image,
      status,
    });

    return nuevoArticulo;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearArticulo,
};
