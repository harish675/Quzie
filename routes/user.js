
const express = require('express');
const router = express.Router();

const userController = require('../controller/user_controller');

router.get('/profile',userController.userProfile);
router.post('/create-user',userController.createUser);
router.post('/create-session',userController.createSession);

router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);


module.exports = router;