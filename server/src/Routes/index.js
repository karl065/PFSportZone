const { Router } = require("express");
const users = require("./UserRoutes/UserRoutes.js");
const router = Router();

router.use("/users", users);

module.exports = router;
