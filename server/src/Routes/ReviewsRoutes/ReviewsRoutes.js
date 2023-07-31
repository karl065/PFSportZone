const {
  addCommentsHandler,
} = require("../../Handlers/HandlersReviews/PostReviewsHandler.js");
const {
  putReviewHandler,
} = require("../../Handlers/HandlersReviews/PutReviewsHandler.js");

const router = require("express").Router();

router.post("/", addCommentsHandler);
router.put("/", putReviewHandler);

module.exports = router;
