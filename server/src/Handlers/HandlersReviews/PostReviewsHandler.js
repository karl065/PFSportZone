const {
  createReviewDB,
  addLikeOrDislike,
  addProductRating,
} = require("../../Controllers/ControllersReviews/PostControllerReview.js");

const postReviewHandler = async (req, res) => {
  const { idUser, id_inventory, message, evaluation } = req.body;

  try {
    const review = await createReviewDB(
      idUser,
      id_inventory,
      message,
      evaluation
    );

    return res.status(201).json(review);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const postLikeOrDislike = async (req, res) => {
  const { idReview, type } = req.body;
  console.log(idReview, type);

  try {
    const review = await addLikeOrDislike(idReview, type);
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const postProductRating = async (req, res) => {
  const { id_inventory, rating } = req.body;

  try {
    const prodRating = await addProductRating(id_inventory, rating);
    return res.status(200).json(prodRating);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postReviewHandler,
  postLikeOrDislike,
  postProductRating,
};
