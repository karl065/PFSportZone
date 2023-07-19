const { Router } = require("express");

const { userRouter } = require("./RegValUserRoutes/regValUserRoutes");
const router = Router();

router.use("/users", userRouter);

module.exports = router;
