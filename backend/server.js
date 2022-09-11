// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

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

app.use(express.static("../frontend/public"));

// Separated Routes for each Resource
const userRoute = require("./routes/users");

// Mount all resource routes
app.use("/api/users", userRoute(db));

// Home page
app.get("/", (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
