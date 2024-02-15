const constructError = require("../../error");
const fileName = "validators/account";

// Queries
const { SELECT_BY_EMAIL } = require("../../database/query/account");

const hasAccountId = (req, res, next) => {
  const methodName = "hasAccountId";

  try {
    const account_id = Number(req?.params?.account_id).toFixed(0);

    console.log("Checking for account_id:", account_id);

    if (isNaN(account_id)) {
      return constructError(
        { req, res, next },
        {
          fileName,
          methodName,
          devReason: "account_id is not an integer",
        },
        { status: 400 }
      );
    }

    req.params.account_id = account_id;
    next();
  } catch (err) {
    constructError(
      { req, res, next },
      {
        fileName,
        methodName,
        thrownErr: err,
      }
    );
  }
};

const hasPassword = (req, res, next) => {
  const methodName = "hasPassword";
  try {
    const password = req?.body?.password;

    if (!password) {
      return constructError(
        { req, res, next },
        {
          fileName,
          methodName,
          devReason: "No password was provided on request body",
        },
        { status: 400 }
      );
    }

    next();
  } catch (err) {
    constructError(
      { req, res, next },
      { fileName, methodName, thrownErr: err }
    );
  }
};

const isUniqueEmail = async (req, res, next) => {
  const methodName = "isUniqueEmail";
  try {
    const email = req?.body?.email;

    if (!email) {
      return constructError(
        { req, res, next },
        {
          fileName,
          methodName,
          devReason: "No email was found on the request body",
        }
      );
    }

    const data = await SELECT_BY_EMAIL(email);

    if (data.rowCount != 0) {
      return constructError(
        { req, res, next },
        { fileName, methodName, devReason: "Email is already taken" },
        { status: 400 }
      );
    }

    next();
  } catch (err) {
    constructError(
      { req, res, next },
      { fileName, methodName, thrownErr: err }
    );
  }
};

module.exports = {
  hasAccountId,
  isUniqueEmail,
  hasPassword,
};
