const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../../controller/api/users_api');

router.get('/login', userController.loginPage);
router.get('/sign-up', userController.signUp);

// Middleware to authenticate requests using Passport JWT strategy
router.use(passport.authenticate('jwt', { session: false }));

// Protected route that requires authentication
router.post('/create-session', userController.createSession);

// Unprotected route for user registration
router.post('/create-user', userController.createUser);

router.get('/check-login', (req, res) => {
    if (req.user) {
        // If the user is authenticated, send a response indicating logged in
        res.json({ loggedIn: true });
    } else {
        // If the user is not authenticated, send a response indicating not logged in
        res.json({ loggedIn: false });
    }
});

module.exports = router;
