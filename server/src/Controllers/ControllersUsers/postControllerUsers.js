const {Usuarios} = require('../../DB.js');
const bcryptjs = require('bcryptjs');

const postUser = async (name, address, phone, email, password, role) => {
  password = await bcryptjs.hash(password, 10);

  const user = await Usuarios.create({
    name,
    address,
    phone,
    email,
    password,
    role,
  });
  return user;
};

module.exports = {postUser};
