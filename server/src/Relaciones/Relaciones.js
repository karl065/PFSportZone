// Archivo: relaciones.js

/**
 * La función `relaciones` establece relaciones entre diferentes modelos en una aplicación JavaScript.
 * @param models - El parámetro `models` es un objeto que contiene referencias a los diferentes modelos
 * en su aplicación. Cada modelo representa una tabla en su base de datos.
 * @returns The function `relaciones` returns an object that contains references to the models
 * `Personas`, `Usuarios`, `Inventarios`, `Categorias`, `Ventas`, `Favoritos`, and `Pagos`.
 */
const relaciones = (models) => {
  const {
    Personas,
    Usuarios,
    Inventarios,
    Categorias,
    Ventas,
    Favoritos,
    Pagos,
    Carrito,
    IngresoProducto,
    Deportes,
    Marcas,
    CarritoInventarios,
    VentasInventarios,
    Reviews,
    Preguntas,
  } = models;

  Categorias.hasMany(Inventarios, {
    foreignKey: 'id_categories',
    as: 'inventarios',
  });
  Inventarios.belongsTo(Categorias, {
    foreignKey: 'id_categories',
    as: 'categorias',
  });

  // -------------------------------------------------------
  // Relación entre Usuarios y Favoritos...
  Usuarios.hasMany(Favoritos, {
    foreignKey: 'idUser',
    as: 'favoritos',
    onDelete: 'CASCADE',
  });
  Favoritos.belongsTo(Usuarios, {
    foreignKey: 'idUser',
    as: 'usuario',
    onDelete: 'CASCADE',
  });
  // Relación entre Favoritos e Inventarios
  Favoritos.belongsToMany(Inventarios, {
    through: 'Favoritos_Inventarios',
    foreignKey: 'idFavorites',
    otherKey: 'id_inventory',
    as: 'inventarios',
    onDelete: 'CASCADE',
  });
  Inventarios.belongsToMany(Favoritos, {
    through: 'Favoritos_Inventarios',
    foreignKey: 'id_inventory',
    otherKey: 'idFavorites',
    as: 'favoritos',
    onDelete: 'CASCADE',
  });
  // Relación entre Usuarios y Reviews...
  Usuarios.hasMany(Reviews, {
    foreignKey: 'idUser',
    as: 'reviews',
    onDelete: 'CASCADE',
  });
  Reviews.belongsTo(Usuarios, {
    foreignKey: 'idUser',
    as: 'usuario',
    onDelete: 'CASCADE',
  });

  Inventarios.hasMany(Reviews, {
    foreignKey: 'id_inventory',
    as: 'reviews',
  });
  Reviews.belongsTo(Inventarios, {
    foreignKey: 'id_inventory',
    as: 'inventarios',
  });

  Usuarios.belongsToMany(Inventarios, {
    through: 'Favoritos',
  });
  Inventarios.belongsToMany(Usuarios, {
    through: 'Favoritos',
  });

  Usuarios.hasMany(Ventas, {
    foreignKey: 'idUser',
    as: 'ventas',
  });
  Ventas.belongsTo(Usuarios, {
    foreignKey: 'idUser',
    as: 'ventas',
  });

  Ventas.belongsToMany(Inventarios, {
    through: {
      model: VentasInventarios,
      unique: false,
      attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
    },
    foreignKey: 'id_sales',
  });
  Inventarios.belongsToMany(Ventas, {
    through: {
      model: VentasInventarios,
      unique: false,
      attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
    },
    foreignKey: 'id_inventory',
  });

  Inventarios.belongsTo(Marcas, {
    foreignKey: 'idMarca',
    as: 'marcas',
  });
  Marcas.hasMany(Inventarios, {
    foreignKey: 'idMarca',
    as: 'inventarios',
  });
  Deportes.hasMany(Inventarios, {
    foreignKey: 'idDeportes',
    as: 'inventarios',
  });
  Inventarios.belongsTo(Deportes, {
    foreignKey: 'idDeportes',
    as: 'deportes',
  });

  Usuarios.hasOne(Carrito, {foreignKey: 'idUser', as: 'carrito'});
  Carrito.belongsTo(Usuarios, {foreignKey: 'idUser', as: 'usuario'});

  // Hook afterCreate para crear automáticamente un carrito con valores nulos para el usuario recién creado
  Usuarios.afterCreate(async (usuario, options) => {
    try {
      await Carrito.create({
        cantProd: 0,
        total: 0,
        idUser: usuario.idUser,
      });
    } catch (error) {
      console.error('Error al crear el carrito:', error);
    }
  });

  Carrito.belongsToMany(Inventarios, {
    through: {
      model: CarritoInventarios,
      unique: false,
      attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
    },
    foreignKey: 'idCar',
  });

  Inventarios.belongsToMany(Carrito, {
    through: {
      model: CarritoInventarios,
      unique: false,
      attributes: ['cant', 'precioPorUnd', 'precioPorCant'],
    },
    foreignKey: 'id_inventory',
  });

  // ? PREGUNTAS
  Inventarios.hasMany(Preguntas, {foreignKey: 'id_inventory', as: 'questions'});
  Preguntas.belongsTo(Inventarios, {foreignKey: 'id_inventory', as: 'product'});

  return {
    Personas,
    Usuarios,
    Inventarios,
    Categorias,
    Ventas,
    Favoritos,
    Pagos,
    Carrito,
    IngresoProducto,
    Marcas,
    Deportes,
    CarritoInventarios,
    VentasInventarios,
  };
};
module.exports = {relaciones};
