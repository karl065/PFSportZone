const {
  filterStockAvailableController,
} = require("../../Controllers/FilterUsersControllers/GetStockFilterController.js");

const getStockFilterHandler = async (req, res) => {
  const { status } = req.query;
  try {
    const queryResult = await filterStockAvailableController(status);
    res.status(200).json(queryResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getStockFilterHandler,
};
