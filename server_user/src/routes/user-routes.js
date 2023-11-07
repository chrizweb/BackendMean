const Router = require('express');
const router = Router();

const user_controller = require('../controllers/controller-user');

router.post('/', user_controller.createUser);
router.get('/', user_controller.getUsers);
router.get('/:id', user_controller.getUserId);
router.put('/:id', user_controller.updateUser);
router.delete('/:id', user_controller.deleteUser);

module.exports = router;
