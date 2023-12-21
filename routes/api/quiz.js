
const express = require('express');
const router = express.Router();
const quizApi = require('../../controller/api/quiz_api');

router.get('/',quizApi.index);


module.exports = router;