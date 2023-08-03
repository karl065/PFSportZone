const {
  getReviewByUser,
  getReviewById,
  getAllReview,
} = require("../../Controllers/ControllersReviews/GetControllerUserReview.js");

const getAllReviewHandler = async (req, res) => {
  try {
    const getAll = await getAllReview();
    return res.status(200).json(getAll);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getReviewUserHandler = async (req, res) => {
  const { idUser, idReview } = req.params;

  if (idUser === undefined || idReview === undefined) {
    return res
      .status(400)
      .json({ message: "Debe proporcionar los datos solicitados...!" });
  }

  try {
    const review = await getReviewByUser(idUser, idReview);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getReviewByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const review = await getReviewById(id);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getReviewUserHandler,
  getReviewByIdHandler,
  getAllReviewHandler,
};
