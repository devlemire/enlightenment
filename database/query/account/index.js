const client = require(`../../index`);

const SELECT_ALL = async () => {
  const data = await client.query(`SELECT * FROM account`);
  return data;
};

const SELECT_BY_ACCOUNT_ID = async (account_id) => {
  const data = await client.query(
    `SELECT * FROM account WHERE account_id = $1`,
    [account_id]
  );

  return data;
};

const SELECT_BY_EMAIL = async (email) => {
  const data = await client.query(
    `SELECT email FROM account WHERE email = $1`,
    [email]
  );

  return data;
};

const CREATE = async ({ email, password }) => {
  const data = await client.query(
    `INSERT INTO account (email, password) VALUES ($1, $2)`,
    [email, password]
  );

  return data;
};

module.exports = {
  SELECT_ALL,
  SELECT_BY_ACCOUNT_ID,
  SELECT_BY_EMAIL,
  CREATE,
};
