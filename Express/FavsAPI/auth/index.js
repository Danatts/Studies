const express = require('express');

const router = express.Router();

const {
  handleLogin
} = require('./auth.controller');

router.route('/local/login')
  .post(handleLogin);

module.exports = router;
