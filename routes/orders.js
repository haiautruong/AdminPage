const express = require('express');
const router = express.Router();
const controller = require("../controllers/OrderController");

router.get("/", (req,res) => controller.index(req,res));
router.get("/edit/:id", (req,res) => controller.edit(req,res));
router.post("/edit", (req,res) => controller.update(req,res));


module.exports = router;