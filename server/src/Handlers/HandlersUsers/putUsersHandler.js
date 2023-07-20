const {
  putUsuarios,
} = require('../../Controllers/ControllersUsers/putControllersUsers');
const bcryptjs = require('bcryptjs');

const putHandlerUsuarios = async (req, res) => {
  const {id} = req.params;
  const {email, user, password, role, userStatus} = req.body;
  let passwordHash;
  if (password) {
    passwordHash = await bcryptjs.hash(password, 10);
  }
  if (email || user || password || role || userStatus) {
    try {
      const userData = {
        ...(email !== undefined && {email}),
        ...(user !== undefined && {user}),
        ...(password !== undefined && {password: passwordHash}),
        ...(role !== undefined && {role}),
        ...(userStatus !== undefined && {userStatus}),
      };
      const usuario = await putUsuarios(userData, id);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(500).json({error: error});
    }
  }
};

module.exports = {putHandlerUsuarios};
