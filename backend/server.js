// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
app.use(morgan("dev"));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(cors());

app.use(express.static("../frontend/public"));

// Separated Routes for each Resource
const userRoute = require("./routes/users");
const carRoute = require("./routes/cars");
const driverRoutes = require("./routes/drivers");
const transactionRoutes = require("./routes/transactions");
const tripRoutes = require("./routes/trips");
const locationRoutes = require("./routes/locations");
const refundRoutes = require("./routes/refunds");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");

// Mount all resource routes
app.use("/api/users", userRoute(db));
app.use("/api/cars", carRoute(db));
app.use("/api/drivers", driverRoutes(db));
app.use("/api/transactions", transactionRoutes(db));
app.use("/api/trips", tripRoutes(db));
app.use("/api/locations", locationRoutes(db));
app.use("/api/refunds", refundRoutes(db));
app.use("/login", loginRoutes(db));
app.use("/register", registerRoutes(db));

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
