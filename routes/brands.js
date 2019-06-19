const express = require('express');
const router = express.Router();
const BrandController = require("../controllers/BrandControllers");

router.get("/", (req,res) => BrandController.index(req,res));
router.get("/add", (req,res) => BrandController.add(req,res));
router.post("/add", (req,res) => BrandController.create(req,res));
module.exports = router;