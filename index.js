require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");

const { SERVER_PORT } = process.env;
const app = express();

app.use(express.static(`${__dirname}/client/build`));
app.get("*", (req, res, next) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
