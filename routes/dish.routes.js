const Router = require('express')
const router = new Router();
const dishController = require('../controllers/dish.controller');

router.post('/dish', dishController.createDish);
router.get('/dish/:id', dishController.getOneDish);
router.get('/dish', dishController.getDishes);
router.put('/dish', dishController.updateDish);
router.delete('/dish/:id', dishController.deleteDish);

module.exports = router;
