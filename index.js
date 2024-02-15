require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const { SERVER_PORT } = process.env;
const app = express();

// Read request json
app.use(express.json());

// Log incoming requests
app.use(morgan("dev"));

// Routes
app.use(routes);

// Server the Client
app.use(express.static(`${__dirname}/client/build`));
app.get("*", (req, res, next) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

// Start the server
app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
