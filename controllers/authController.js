const Driver = require('../models/driverSchema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Register a new driver
const registerDriver = async (req, res) => {
  const { licenseNo, firstName, lastName, middleName, address, bday, nationality, email, password } = req.body;

  try {
    const existingDriver = await Driver.findOne({ email });
    if (existingDriver) {
      return res.status(400).json({ message: 'Driver already exists' });
    }

    const newDriver = new Driver({ licenseNo, firstName, lastName, middleName, address, bday, nationality, email, password });
    await newDriver.save();

    res.status(201).json({ message: 'Driver registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering driver', error: err.message });
  }
};

// Login a driver
const loginDriver = async (req, res) => {
  const { email, password } = req.body;

  try {
    const driver = await Driver.findOne({ email });
    if (!driver) {
      return res.status(400).json({ message: 'Driver not found' });
    }

    const isMatch = await driver.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: driver._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

module.exports = { registerDriver, loginDriver };
