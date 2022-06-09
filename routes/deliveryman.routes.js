const Router = require('express')
const router = new Router();
const deliverymanController = require('../controllers/deliveryman.controller');

router.post('/deliveryman', deliverymanController.createDeliveryman);
router.get('/deliveryman/:id', deliverymanController.getOneDeliveryman);
router.get('/deliveryman', deliverymanController.getDeliverymans);
router.put('/deliveryman', deliverymanController.updateDeliveryman);
router.delete('/deliveryman/:id', deliverymanController.deleteDeliveryman);

module.exports = router;
