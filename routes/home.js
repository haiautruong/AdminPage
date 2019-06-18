const express = require('express');
const router = express.Router();

/**
 * Routing for home
 */

const controller = require("../controllers/HomeController");

router.get("/", (req,res) => controller.index(req,res));
router.get("/signup", (req,res) => controller.signup(req,res));

router.post("/login", (req,res) => controller.index(req,res));

module.exports = router;