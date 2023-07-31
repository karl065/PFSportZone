const {
  putReview,
} = require("../../Controllers/ControllersReviews/PutControllerReviews.js");

const putReviewHandler = async (req, res) => {
  const { idReview, question, answer } = req.body;
  let updateData;

  if (question !== undefined) updateData = { question: question };
  if (answer !== undefined) updateData = { answer: answer };
  try {
    const putRev = await putReview(idReview, updateData);
    return res.status(200).json(putRev);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  putReviewHandler,
};
