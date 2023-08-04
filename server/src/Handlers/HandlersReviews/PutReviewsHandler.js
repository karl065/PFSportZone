const {
  putReview,
} = require("../../Controllers/ControllersReviews/PutControllerReviews.js");

const putReviewHandler = async (req, res) => {
  const { idReview } = req.query;
  const { like, dislike, evaluation } = req.body;

  try {
    const reviews = {
      ...(like !== undefined && { like }),
      ...(dislike !== undefined && { dislike }),
      ...(evaluation !== undefined && { evaluation }),
    };
    const putRev = await putReview(idReview, reviews);
    return res.status(200).json(putRev);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  putReviewHandler,
};
