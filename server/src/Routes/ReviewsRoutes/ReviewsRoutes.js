const {
  postReviewHandler,
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

router.post("/", postReviewHandler);

router.put("/", putReviewHandler);

router
  .get("/", getAllReviewHandler)
  .get("/:idUser/:idReview", getReviewUserHandler)
  .get("/:id", getReviewByIdHandler);

module.exports = router;
