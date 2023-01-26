const express = require("express");
const cors = require("cors");
const app = express();

// const bookmarksController = require("./controllers/bookmarksController.js");

const portfolioController = require("./controllers/portfolioController.js");

// CONFIGURATION
app.use(cors());
app.use(express.json());


app.use("/portfolios", portfolioController);
app.get("/", (req, res) => {
    res.send("Welcome to the bookmarks app !@#!@#!@")
});

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;