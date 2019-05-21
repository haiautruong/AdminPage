const dbs = require('../dbs/index');

exports.index = function(req, res){
    let product = dbs.product;
    product.find().exec((err, list) =>{
        if(err) item.push(err);
        console.log('listProduct', list);
        res.render('products/index', {list});
    })
}