const {
  filterUsersControllers,
} = require("../../Controllers/FilterUsersControllers/GetUsersFilterController");

const getUsersFilterHandler = async (req, res) => {
  const { role, userStatus } = req.query;

  try {
    const queryResult = await filterUsersControllers(role, userStatus);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersFilterHandler,
};
