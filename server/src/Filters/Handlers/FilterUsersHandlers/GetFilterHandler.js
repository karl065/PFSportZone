const {
  filterStockAvailableController,
} = require('../../Controllers/FilterUsersControllers/GetStockFilterController');
const {
  filterUsersControllers,
} = require('../../Controllers/FilterUsersControllers/GetUsersFilterController');

const getFilterHandler = async (req, res) => {
  const {role, userStatus, status} = req.query;

  try {
    if (status) {
      const queryResult = await filterStockAvailableController(status);
      return res.status(200).json(queryResult);
    }
    const queryResult = await filterUsersControllers(role, userStatus);
    return res.status(200).json(queryResult);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
};

module.exports = {
  getFilterHandler,
};
