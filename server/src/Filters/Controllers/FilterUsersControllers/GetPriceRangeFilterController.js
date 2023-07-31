/* El código `const { Inventarios } = require("../../../DB");` está importando el modelo `Inventarios`
desde el módulo `../../../DB`. Esto permite que el código acceda al modelo `Inventarios` y realice
operaciones en él, como consultar la base de datos para obtener datos de inventario. */
const {Inventarios, Deportes, Categorias, Marcas} = require('../../../DB');
const {Op} = require('sequelize');

/**
 * La función filtra y devuelve todos los inventarios con un estado específico.
 * @param status - El parámetro `status` se utiliza para filtrar los elementos del inventario en
 * función de su estado. Se pasa al método `findAll` del modelo `Inventarios` para recuperar todos los
 * elementos del inventario que tienen el estado especificado.
 * @returns el resultado de la llamada al método `findAll` en el modelo `Inventarios`, con una
 * condición `where` para filtrar por el parámetro `status` proporcionado.
 */
const filterAvailableController = async (status) => {
  return await Inventarios.findAll({where: {status: status}});
};

/**
 * La función `filterStockPriceRange` filtra productos en función de su precio de venta dentro de un
 * rango determinado.
 * @param minPrice - El precio mínimo de los productos en stock que desea filtrar.
 * @param maxPrice - El precio máximo de los productos de stock que desea filtrar.
 * @returns una variedad de productos que caen dentro del rango de precio especificado.
 */
const filterPriceRange = async (
  minPrice = 0,
  maxPrice,
  genre,
  state,
  idDeportes,
  id_categories,
  idMarca,
  status
) => {
  try {
    const whereConditions = {
      selling_price: {[Op.between]: [minPrice, maxPrice || Infinity]},
      status: 'Available',
    };

    if (genre) {
      whereConditions.genre = genre;
    }

    if (state) {
      whereConditions.stage = state;
    }

    if (idDeportes) {
      whereConditions.idDeportes = idDeportes;
    }

    if (id_categories) {
      whereConditions.id_categories = id_categories;
    }

    if (idMarca) {
      whereConditions.idMarca = idMarca;
    }
    if (status) {
      whereConditions.status = status;
    }
    const productsInRange = await Inventarios.findAll({
      where: whereConditions,
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
    return productsInRange;
  } catch (error) {
    throw new Error(
      'No se encontró ningún(os) producto(s) dentro del rango solicitado...!'
    );
  }
};

module.exports = {
  filterAvailableController,
  filterPriceRange,
};
