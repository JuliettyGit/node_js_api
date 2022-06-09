const Router = require('express')
const router = new Router();
const orderStatusController = require('../controllers/orderStatus.controller');

router.post('/orderStatus', orderStatusController.createOrderStatus);
router.get('/orderStatus/:id', orderStatusController.getOneOrderStatus);
router.get('/orderStatus', orderStatusController.getOrderStatuses);
router.put('/orderStatus', orderStatusController.updateOrderStatus);
router.delete('/orderStatus/:id', orderStatusController.deleteOrderStatus);

module.exports = router;
