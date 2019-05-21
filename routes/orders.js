const express = require('express');
const router = express.Router();

/**
 * Routing for Order
 */

const OrderController = require("../controllers/OrderController");
const controller = new OrderController();

router.get("/", (req,res) => controller.index(req,res));

module.exports = router;