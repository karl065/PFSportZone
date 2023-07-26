const {Usuarios} = require('../../DB.js');
const bcryptjs = require('bcryptjs');

const createUserDb = async (email, user, password, role, userStatus) => {
  try {
    if(password) password = await bcryptjs.hash(password, 10);

    const newUser = await Usuarios.create({
      email,
      user,
      password,
      role,
      userStatus,
    });

    return newUser;
  } catch (error) {
    return error;
  }
};

module.exports = {createUserDb};
