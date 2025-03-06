const express = require('express'); 
const router = express.Router();
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const submitLetter=require('../controllers/letterController')
const validateToken=require("../middlewares/validateTokenHandler");
const getGeneratedLetter = require('../controllers/getpdf');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken,currentUser);
router.post('/submit', submitLetter)
router.get('/letters/:id',getGeneratedLetter)

module.exports = router;
