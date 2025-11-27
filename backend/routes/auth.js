const express = require('express');
const router = express.Router();
const {
  login,
  register,
  getMe,
  getAllUsers,
} = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/auth');

router.post('/login', login);

router.get('/me', protect, getMe);

router.post('/register', protect, authorize('admin'), register);
router.get('/users', protect, authorize('admin'), getAllUsers);

module.exports = router;
