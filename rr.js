// auth.js
const express = require('express');
const router = express.Router();

const { signUp, signIn } = require('../controllers/auth');
const { validateSignUp, validateSignIn } = require('../validators/auth');
const { catchErrors } = require('../handlers/errorHandlers');

router.post('/signup', validateSignUp, catchErrors(signUp));
router.post('/signin', validateSignIn, catchErrors(signIn));

module.exports = router;
