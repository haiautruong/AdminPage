const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/", (req,res) => ProductController.index(req,res));
router.get("/add", (req,res) => ProductController.add(req,res));
router.get("/edit", (req,res) => ProductController.edit(req,res));
router.post("/add", (req,res) => ProductController.create(req,res));

module.exports = router;