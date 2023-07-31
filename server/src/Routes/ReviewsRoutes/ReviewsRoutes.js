const {
  addCommentsHandler,
} = require("../../Handlers/HandlersReviews/PostReviewsHandler.js");
const {
  putReviewHandler,
} = require("../../Handlers/HandlersReviews/PutReviewsHandler.js");
const {
  getReviewUserHandler,
  getReviewByIdHandler,
  getAllReviewHandler,
} = require("../../Handlers/HandlersReviews/GetReviewsUserHandler.js");

const router = require("express").Router();

router.post("/", addCommentsHandler);
router.put("/", putReviewHandler);
router.get("/", getAllReviewHandler);
router.get("/:idUser/:idReview", getReviewUserHandler);
router.get("/:id", getReviewByIdHandler);

module.exports = router;
