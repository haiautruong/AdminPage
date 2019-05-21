const express = require('express');
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/", (req,res) => CategoryController.index(req,res));
router.get("/add", (req,res) => CategoryController.add(req,res));
router.post("/add", (req,res) => CategoryController.create(req,res));
router.get("/edit", (req,res) => CategoryController.edit(req,res));
router.get("/:id", (req,res) => CategoryController.product_details(req,res));

module.exports = router;