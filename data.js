// data.js
const express = require('express');
const router = express.Router();

const { requireSignIn, isAdmin } = require('../middlewares/auth');
const { getChartData } = require('../controllers/data');

router.get('/chart', requireSignIn, isAdmin, getChartData);

module.exports = router;
