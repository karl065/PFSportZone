const {
  getControllerUserByEmail,
  getControllerUser,
} = require('../../Controllers/ControllersUsers/GetControllersUsers');

const getHandlerUsers = async (req, res) => {
  const {email} = req.query;
  try {
    if (email) {
      const user = await getControllerUserByEmail(email);
      return res.status(200).json(user);
    }
    const user = await getControllerUser();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
};

module.exports = {getHandlerUsers};
