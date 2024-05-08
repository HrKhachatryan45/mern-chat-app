const express = require('express');
const {loginUser, signupUser, logoutUser} = require("../controllers/authUserController");

const router = express.Router();

router.post('/login',loginUser)
router.post('/signup',signupUser)
router.post('/logout',logoutUser)

module.exports = router;