const Router = require('express')
const router = new Router();
const orderController = require('../controllers/order.controller');

router.post('/order', orderController.createOrder);
router.get('/order/:id', orderController.getOneOrder);
router.get('/order', orderController.getOrders);
router.put('/order', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);

module.exports = router;
