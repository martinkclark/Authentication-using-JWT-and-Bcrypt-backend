const express = require('express');
const { authenticate } = require('../middlewares/auth');

const app = express.Router();

app.get('/profile', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = app;

