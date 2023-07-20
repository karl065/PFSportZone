const {
  deleteUser,
} = require('../../Controllers/ControllersUsers/deleteControllersUsers');

const deleteHandlerUser = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await deleteUser(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {deleteHandlerUser};
