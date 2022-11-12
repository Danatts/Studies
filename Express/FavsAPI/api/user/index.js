const express = require('express');

const router = express.Router();

const { isAuth } = require('../../auth/auth.service');

const {
  handleCreateUser,
  handleGetAllUsers,
} = require('./user.controller');

router.route('/')
  .get(isAuth(), handleGetAllUsers)
  .post(handleCreateUser);

module.exports = router;
