// DEPENDENCIES

const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();

const productController = require('./controllers/productController.js')
// MIDDLEWARE
app.use(express.json());
app.use(cors());
// var cors = require('cors');
app.use('/products', productController);
// ROUTES
app.get('/', (req, res) => {
    res.send("Get the Products' at Ahead_Online_shopping!")
})
app.get('*', (req, res) => {
    res.status(404).send('page not found')
})
// EXPORT
module.exports = app;