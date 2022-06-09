const Router = require('express')
const router = new Router();
const ingredientController = require('../controllers/ingredient.controller');

router.post('/ingredient', ingredientController.createIngredient);
router.get('/ingredient/:id', ingredientController.getOneIngredient);
router.get('/ingredient', ingredientController.getIngredients);
router.put('/ingredient', ingredientController.updateIngredient);
router.delete('/ingredient/:id', ingredientController.deleteIngredient);

module.exports = router;
