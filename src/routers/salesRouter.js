const { Router } = require('express');
const saleController = require('../controllers/saleController');
const saleValidator = require('../middlewares/saleValidator');

const router = Router();

router.get('/', saleController.getAllSales);

router.post('/', saleValidator, saleController.createSales);

router.get('/:id', saleController.getSaleById);

router.delete('/:id', saleController.deleteSale);

router.put('/:id', saleValidator, saleController.updateSale);

module.exports = router;