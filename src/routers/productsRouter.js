const { Router } = require('express');
const productController = require('../controllers/productController');
const productValidator = require('../middlewares/productValidator');

const router = Router();

router.get('/', productController.getAllProducts);

router.post('/', productValidator, productController.createProduct);

router.get('/:id', productController.getProductsById);

module.exports = router;