const express = require('express');
const router = express.Router();
const passport = require('passport');
const quizApi = require('../../controller/api/quiz_api');

// // Protected route for deleting a quiz
// router.delete('/:id', passport.authenticate('jwt', { session: false }), quizApi.deleteQuiz);

// Protected route for creating a quiz
router.post('/create-quiz', passport.authenticate('jwt', { session: false }), quizApi.createQuiz);

// Protected route for getting all quizzes
router.get('/get-quiz', passport.authenticate('jwt', { session: false }), quizApi.getAllQuizzes);

module.exports = router;