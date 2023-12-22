
const express = require('express');
const router = express.Router();
const passport = require('passport');
const quizApi = require('../../controller/api/quiz_api');


router.get('/',quizApi.index);
router.delete('/:id',passport.authenticate('jwt',{session:false}),);
router.post('/create-quiz',quizApi.createQuiz);


module.exports = router;