const mongoose = require('mongoose');
const productSchema = require("../models/category");
const categorySchema = require("../models/product");
const url = "mongodb+srv://admin0:1234567890@webshop-xftef.mongodb.net/laptop-shop";

mongoose.connect(
  url, 
  { 
      useNewUrlParser: true
   }
);
mongoose.set('useCreateIndex', true);

const product = mongoose.model("product", productSchema);
const category = mongoose.model("category", categorySchema);
module.exports = {
  product,
  category
};