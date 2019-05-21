const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", (req,res) => ProductController.index(req,res));
router.get("/:id", (req,res) => ProductController.product_details(req,res));

module.exports = router;