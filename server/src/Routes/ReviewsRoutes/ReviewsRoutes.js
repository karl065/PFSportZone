const {
  postReviewHandler,
} = require("../../Handlers/HandlersReviews/PostReviewsHandler.js");
const {
  putReviewHandler,
} = require("../../Handlers/HandlersReviews/PutReviewsHandler.js");

const router = require("express").Router();

router.post("/", postReviewHandler);

router.put("/:idReview", putReviewHandler);

module.exports = router;
