const { Router } = require('express');
const productController = require('../controllers/productController');

const router = Router();

router.get('/', productController.getAllProducts);

router.post('/', productController.createProduct);

router.get('/:id', productController.getProductsById);

module.exports = router;