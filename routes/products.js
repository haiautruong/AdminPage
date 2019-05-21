const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", (req,res) => ProductController.index(req,res));
router.get("/add", (req,res) => ProductController.add(req,res));

module.exports = router;