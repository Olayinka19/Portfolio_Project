const express = require('express');
const products = express.Router();
const {getAllProducts , getProduct , createProduct , deleteProduct, updateProduct} = require('../queries/products.js')
const {checkName, checkPrice,  checkImage , checkCategory , checkIs_favorite} = require('../validations/checkProducts.js');
// const confirmHealth = require("../confirmHealth");
products.get('/', async (req, res) => {
    const allProducts = await getAllProducts();
    if(allProducts) {
        res.status(200).json({payload: allProducts,success: true});

    } else {
        res.status(500).json ({error: 'server error'});
    }
});
products.get('/:id', async (req, res) => {
    const{id} = req.params
    const product = await getProduct(id);
    if(product.id) {
        res.json({payload: product,success: true})
        
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Product not found"})
    }
})
// Add checkName and stuffs here
products.post('/', async (req, res) => {
    let { name, price , category, image , is_favorite } = req.body;
    try{
        const product = await createProduct(req.body);
        res.json({payload: product,success: true});

    } catch (error) {
        res.status(400).json({ error: error });
    }
} )

products.delete('/:id', async (req, res) => {
    const {id} = req.params 
    const product = await deleteProduct(id);
    if(product.id) {
        res.json({payload: product,success: true});
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Snack not found"})
    }
})

products.put('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await updateProduct(req.body, id);
    if(product.id) {
        res.json(product);
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Product not found"})
    }
}) 

module.exports = products;