
const express = require('express');
const router = express.Router();


router.use('/quiz',require('./quiz'));
router.use('/users',require('./user'));


module.exports = router;