const bcrypt = require("bcrypt");
const saltRounds = 10;

// Query
const {
  SELECT_ALL,
  SELECT_BY_ACCOUNT_ID,
  CREATE,
} = require("../database/query/account");

const getAll = async () => {
  const data = await SELECT_ALL();
  return data;
};

const getById = async (account_id) => {
  const data = await SELECT_BY_ACCOUNT_ID(account_id);
  return data;
};

const create = async ({ email, password }) => {
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (!err) {
      const data = await CREATE({ email, password: hash });
      return data;
    }
  });
};

module.exports = {
  getAll,
  getById,
  create,
};
