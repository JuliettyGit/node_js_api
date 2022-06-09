const Router = require('express')
const router = new Router();
const orderItemController = require('../controllers/orderItem.controller');

router.post('/orderItem', orderItemController.createOrderItem);
router.get('/orderItem/:id', orderItemController.getOneOrderItem);
router.get('/orderItem', orderItemController.getOrderItems);
router.put('/orderItem', orderItemController.updateOrderItem);
router.delete('/orderItem/:id', orderItemController.deleteOrderItem);

module.exports = router;
