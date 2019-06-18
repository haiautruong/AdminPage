const dbs = require('../dbs/index');
let product = dbs.product;
let category = dbs.category;
exports.index = function(req, res){    
    product.find().exec((err, list) =>{
        if(err) item.push(err);
        res.render('products/index', {list});
    });
}

exports.add = function(req, res){    
    category.find().exec((err, list) =>{
        if(err) item.push(err);
        res.render('products/add', {list});
    });
}

exports.edit = function(req, res){
   
    category.find().exec((err, listCate) =>{
        if(err) item.push(err);
        res.render('products/edit', {listCate});
    });
}