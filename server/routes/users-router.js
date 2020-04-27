const { Router } = require('express');
const userController  = require('../controllers/users-controller');

const router = Router();

router.post('/create', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/logout', userController.logout);

module.exports = router;