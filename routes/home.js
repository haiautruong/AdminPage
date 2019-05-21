const express = require('express');
const router = express.Router();

/**
 * Routing for home
 */

const HomeController = require("../controllers/HomeController");
const controller = new HomeController();

router.get("/", (req,res) => controller.index(req,res));

module.exports = router;