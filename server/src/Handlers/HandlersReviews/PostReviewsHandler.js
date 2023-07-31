const {
  createReviewDB,
} = require("../../Controllers/ControllersReviews/PostControllerReview.js");

const addCommentsHandler = async (req, res) => {
  const { idUser, id_inventory, question, answer, assessment } = req.body;

  try {
    const addComment = await createReviewDB(
      idUser,
      id_inventory,
      question,
      answer,
      assessment
    );
    res.status(201).json(addComment);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addCommentsHandler,
};
