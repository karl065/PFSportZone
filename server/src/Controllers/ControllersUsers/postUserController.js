const { Usuarios } = require("../../DB.js");
const bcryptjs = require("bcryptjs");

const createUserDb = async (email, user, password, role, userStatus) => {
  password = await bcryptjs.hash(password, 10);
  try {
    const newUser = await Usuarios.create({
      email,
      user,
      password,
      role,
      userStatus,
    });

    return newUser;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { createUserDb };
