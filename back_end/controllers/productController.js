const express = require('express');
const products = express.Router();
const {getAllProducts , getProduct , createProduct , deleteProduct, updateProduct} = require('../queries/products.js')
const {checkName, checkPrice,  checkImage , checkCategory , checkBlockChain_id, checkDescription , checkIs_favorite} = require('../validations/checkProducts.js');
// INDEX PAGE
products.get('/', async (req, res) => {
    const allProducts = await getAllProducts();
    if(allProducts[0]) {
        res.status(200).json({payload: allProducts,success: true});

    } else {
        res.status(500).json ({error: 'server error'});
    }
});
// SHOW
products.get('/:id', async (req, res) => {
    const{id} = req.params;
    const product = await getProduct(id);
    if(product.id) {
        res.json({payload: product,success: true});
        
        
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Product not found"})
        
    }
})
// CREATE
products.post('/', checkName, async (req, res) => {
    let { name, price , image , category, blockchain_id , description , is_favorite } = req.body;
    try{
        const product = await createProduct(req.body);
        res.json({payload: product,success: true});
        

    } catch (error) {
        res.status(400).json({ error: error });
      
    }
} )
// DELETE
products.delete('/:id', async (req, res) => {
    const {id} = req.params 
    const product = await deleteProduct(id);
    if(product.id) {
        res.json({payload: product,success: true});
       
    } else {
        res.status(404).json({payload: "not found", success:false, error:"Snack not found"})
    }
})
// UPDATE
products.put('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await updateProduct(req.body, id);
    // console.log(product);
    if(product.id) {
        res.json(product);
    } else {
        res.status(404).json({payload: "Unable to Update nft", success:false , error: "NFT not FOund"})
        
    }
}) 

module.exports = products;