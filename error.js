const constructError = (
  { req, res, next },
  { fileName, methodName, devReason = undefined, thrownErr = undefined },
  { status = 500 }
) => {
  const errorObj = { fileName, methodName, devReason, thrownErr };
  console.error("An error has occured in the application:", errorObj);
  res.status(status).send(errorObj);
};

module.exports = constructError;
