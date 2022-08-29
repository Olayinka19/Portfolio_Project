const db = require("../db/dbConfig.js");
const getAllProducts = async () => {
    try {
        const allProducts = await db.any('SELECT * FROM products');
        return allProducts;

    } catch (err) {
        return err
    }
};

const getProduct = async (id) => {
    try {
        const oneProduct = await db.one ("SELECT * FROM products WHERE id=$1", id)
        return oneProduct
    } catch (error) {
        return error;
    }
}
const createProduct = async (product) => {
    const {name , price , image , category, blockchain_id, is_favorite } = product;
    try {
        const newProduct = await db.one (
            'INSERT INTO products (name , price , image , category, blockchain_id,  is_favorite ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name , price , image , category, blockchain_id, is_favorite ]
        );
        return newProduct;
    } catch (error) {
        return error
    }

}

const deleteProduct = async (id) => {
    try {
        const deleteProduct = await db.one('DELETE FROM products WHERE id=$1 RETURNING *', id);
        return deleteProduct;
    } catch (err) {
        return err;
    }
}
const updateProduct = async (product, id) => {
    const {name , price , image , category, blockchain_id, is_favorite } = product
     try {
        const product = await db.one (
            'UPDATE products SET name=$1, price=$2, image=$3, category=$4, blockchain_id=$5, is_favorite=$6, WHERE id=$7 RETURNING *',
            [name , price , image , category, blockchain_id,  is_favorite , id]
        );
        return product;
     } catch (err) {
        return err;
     }
} 
module.exports = { getAllProducts , getProduct , createProduct , deleteProduct, updateProduct};
