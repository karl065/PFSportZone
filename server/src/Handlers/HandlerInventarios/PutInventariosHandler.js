const {
  actualizarArticulo,
} = require('../../Controllers/ControllersInventarios/PutInventariosControllers');

const putInventariosHandler = async (req, res) => {
  const {id} = req.params;
  const {
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
    idDeportes,
  } = req.body;
  try {
    const articulo = {
      ...(article_name !== undefined && {article_name}),
      ...(selling_price !== undefined && {selling_price}),
      ...(purchase_price !== undefined && {purchase_price}),
      ...(stock !== undefined && {stock}),
      ...(description !== undefined && {description}),
      ...(image !== undefined && {image}),
      ...(genre !== undefined && {genre}),
      ...(stage !== undefined && {stage}),
      ...(status !== undefined && {status}),
      ...(id_categories !== undefined && {id_categories}),
      ...(idMarca !== undefined && {idMarca}),
      ...(idDeportes !== undefined && {idDeportes}),
    };
    const articuloActualizado = await actualizarArticulo(id, articulo);
    return res.status(200).json(articuloActualizado);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {
  putInventariosHandler,
};
