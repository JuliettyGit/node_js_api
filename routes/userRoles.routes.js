const Router = require('express')
const router = new Router();
const userRoleController = require('../controllers/userRole.controller');

router.post('/userRoles', userRoleController.createRole);
router.get('/userRoles/:id', userRoleController.getRole);
router.get('/userRoles', userRoleController.getUserRoles);
router.put('/userRoles', userRoleController.updateRole);
router.delete('/userRoles/:id', userRoleController.deleteRole);

module.exports = router;
