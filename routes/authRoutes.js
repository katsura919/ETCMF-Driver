const express = require('express');
const { registerDriver, loginDriver } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
require('../api-docs/api/authSwagger');  

const router = express.Router();

// Register route
router.post('/register', authMiddleware, registerDriver);

// Login route
router.post('/login', authMiddleware, loginDriver);

module.exports = router;
