const express = require('express');
const router = express.Router();

/**
 * Routing for User
 */

const UserController = require("../controllers/UserController");
const controller = new UserController();

router.get("/", (req,res) => controller.index(req,res));

module.exports = router;