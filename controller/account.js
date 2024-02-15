// Service
const accountSvc = require("../service/account");

const getAll = async (req, res, next) => {
  const data = await accountSvc.getAll();
  res.status(200).send(data.rows);
};

const getById = async (req, res, next) => {
  const data = await accountSvc.getById(req.params.account_id);
  res.status(200).send(data.rows);
};

const create = async (req, res, next) => {
  await accountSvc.create({
    email: req.body.email,
    password: req.body.password,
  });

  res.status(200).send("OK");
};

module.exports = {
  getAll,
  getById,
  create,
};
