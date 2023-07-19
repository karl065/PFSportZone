const { Router } = require("express");
const users = require("./UsersRoutes/UsersRoutes.js");
const router = Router();

router.use("/users", users);

module.exports = router;
