const dbs = require('../dbs/index');
let product = dbs.product;
exports.index = function(req, res){
    if (req.isAuthenticated()) {
        product.getAll().exec((err, list) => {
            if(err){
                console.log("all product err: ", err);
            }
            else{
                res.render('products/index', {list});
            }
        })
    }
    else {
        req.session.returnTo = '/products';
        res.redirect('/')
    }
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