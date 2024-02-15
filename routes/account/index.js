const router = require("express").Router();
const { getAll, getById, create } = require("../../controller/account");
const {
  hasAccountId,
  isUniqueEmail,
  hasPassword,
} = require("../../validators/account");

router.get("/", getAll);
router.get("/:account_id", hasAccountId, getById);

router.post("/", isUniqueEmail, hasPassword, create);

module.exports = router;
