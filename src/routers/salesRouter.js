const { Router } = require('express');
const saleController = require('../controllers/saleController');
const saleValidator = require('../middlewares/saleValidator');

const router = Router();

router.get('/', saleController.getAllSales);

router.post('/', saleValidator, saleController.createSales);

router.get('/:id', saleController.getSaleById);

module.exports = router;