const Product = require('../models/product.model');

module.exports = {
    loadProductFromJSON : (req, res) => {
        const products = req.body.products || [];
        if(products.length < 1) {
            res.send("No products found in JSON");
        } else {
            Product.insertMany(products)
                .then(() => res.json((`${products.length} products were saved`)))
                .catch(err => res.status(400).json("Error: " + err));
        }
    },
    getAllProducts : (req, res) => {
        Product.find()
            .then(products => res.json(products))
            .catch(err => res.status(400).json("Error: " + err));
    },
    getProductById : (req, res) => {
        const id = req.params.id;
        Product.findById(id)
            .then(product => res.json(product))
            .catch(err => res.status(400).json("Error: " + err));
    },
    createProduct : (req, res) => {
        const code = req.body.code;
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const newProduct = new Product({code, name, description, price});
    
        newProduct.save()
            .then(() => res.json("Product added!"))
            .catch(err => res.status(400).json("Error: " + err));
    }
};