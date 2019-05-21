const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", (req,res) => ProductController.index(req,res));

module.exports = router;