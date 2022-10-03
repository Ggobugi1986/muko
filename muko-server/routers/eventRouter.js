const express = require('express');
const { event } = require('../models');

const router = express.Router();

router.get('/read-events', async (req, res, next) => {
  try {
    const result = await event.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
