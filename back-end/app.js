const express = require("express");
const cors = require("cors");
const app = express();



const portfolioController = require("./controllers/portfolioController");

// CONFIGURATION
app.use(cors());
app.use(express.json());


app.use("/portfolios", portfolioController);
app.get("/", (req, res) => {
    res.send("Welcome to my portfolio website!")
});

app.get("*", (req, res) => {
    res.status(404).json({error: "page not found"})
})

module.exports = app;