const express = require('express');
const router = express.Router();
const api = require('../api');

router.get('/pagination', (req, res) => api.paginate(req, res));


module.exports = router;