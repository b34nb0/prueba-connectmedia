const router = require('express').Router();
const ProductController = require('../controllers/product.controller');

// Load products from JSON
router.route('/load-json').post(ProductController.loadProductFromJSON);

// Get all products
router.route('/').get(ProductController.getAllProducts);

// Get product (by id)
router.route('/:id').get(ProductController.getProductById);

// Create new product
router.route('/').post(ProductController.createProduct);


module.exports = router;
