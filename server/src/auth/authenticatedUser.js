const {Usuarios, Carrito, Ventas} = require('../DB.js');

/**
 * La función `authenticatedUser` recupera un usuario por su ID y devuelve el objeto de usuario, o un
 * mensaje de error si hay un error.
 * @param idUser - El parámetro `idUser` es el ID del usuario que desea autenticar.
 * @returns La función `authenticatedUser` devuelve el objeto de usuario si se encuentra en la base de
 * datos, o un mensaje de error si hubo un error al recuperar al usuario.
 */
const authenticatedUser = async (idUser) => {
  try {
    const user = await Usuarios.findByPk(idUser, {
      include: [
        {model: Carrito, as: 'carrito'},
        {
          model: Ventas,
          as: 'ventas',
        },
      ],
    });

    if (!user) throw new Error('User not found');

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {authenticatedUser};
