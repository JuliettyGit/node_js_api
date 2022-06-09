const Router = require('express')
const router = new Router();
const dishCategoryController = require('../controllers/dishCategory.controller');

router.post('/dishCategory', dishCategoryController.createDishCategory);
router.get('/dishCategory/:id', dishCategoryController.getOneDishCategory);
router.get('/dishCategory', dishCategoryController.getDishCategories);
router.put('/dishCategory', dishCategoryController.updateDishCategory);
router.delete('/dishCategory/:id', dishCategoryController.deleteDishCategory);

module.exports = router;
