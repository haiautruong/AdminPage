const express = require('express');
const router = express.Router();
const BrandController = require("../controllers/BrandControllers");

router.get("/", (req,res) => BrandController.index(req,res));

module.exports = router;