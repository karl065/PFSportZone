const {
  putUser,
} = require('../../Controllers/ControllersUsers/putControllersUsers');
const bcryptjs = require('bcryptjs');

const putHandlerUser = async (req, res) => {
  const {id} = req.params;
  const {email, user, password, role, userStatus} = req.body;
  let passwordHash;
  if (password) {
    passwordHash = await bcryptjs.hash(password, 10);
  }

  try {
    const userData = {
      ...(email !== undefined && {email}),
      ...(user !== undefined && {user}),
      ...(password !== undefined && {password: passwordHash}),
      ...(role !== undefined && {role}),
      ...(userStatus !== undefined && {userStatus}),
    };
    const userUpdate = await putUser(userData, id);
    return res.status(200).json(userUpdate);
  } catch (error) {
    return res.status(500).json({error: error});
  }
};

module.exports = {putHandlerUser};
