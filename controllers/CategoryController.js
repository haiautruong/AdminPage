const dbs = require('../dbs/index');

exports.index = function(req, res){
    let category = dbs.category;
    category.find().exec((err, list) =>{
        if(err) item.push(err);
        console.log('listCategory', list);
        res.render('category/index', {list});
    })
}