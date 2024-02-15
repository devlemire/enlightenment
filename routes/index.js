const router = require("express").Router();
const account = require("./account");

router.use("/api/v1/account", account);

module.exports = router;
