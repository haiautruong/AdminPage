const express = require('express');
const router = express.Router();
const controller = require("../controllers/OrderController");

router.get("/", (req,res) => controller.index(req,res));

module.exports = router;