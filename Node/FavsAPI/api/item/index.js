const express = require('express');

const router = express.Router();

const { isAuth } = require('../../auth/auth.service');

const {
  handleCreateItem,
} = require('./item.controller');

router.route('/')
  .post(isAuth(), handleCreateItem);

module.exports = router;

