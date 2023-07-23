const {Usuarios} = require('../DB.js');
const bcryptjs = require('bcryptjs');
const {PSWROOT} = process.env;

const superUser = async () => {
  const root = await Usuarios.findByPk(1);

  const password = await bcryptjs.hash(PSWROOT, 10);
  try {
    if (!root) {
      const rootSuperUser = await Usuarios.create({
        email: 'Admin@SportZone.com',
        user: 'root',
        password: password,
        role: 'SuperUser',
        userStatus: true,
      });
      return rootSuperUser;
    }
    return root;
  } catch (error) {
    return error;
  }
};

module.exports = {superUser};
