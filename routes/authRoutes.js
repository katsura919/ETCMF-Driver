const express = require('express');
const { registerDriver, loginDriver } = require('../controllers/authController');

require('../api-docs/api/authSwagger');  

const router = express.Router();

// Register route
router.post('/register', registerDriver);

// Login route
router.post('/login', loginDriver);

module.exports = router;
