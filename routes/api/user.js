const express = require('express');
const router = express.Router();
const userController = require('../../controller/api/users_api');



router.post('/create-session',userController.createSession);
router.post('/create-user',userController.createUser);



module.exports = router;