const dbs = require('../dbs/index');
let category = dbs.category;

exports.index = function(req, res){
    category.find().exec((err, list) =>{
        if(err) item.push(err);
        console.log('listCategory', list);
        res.render('categories/index', {list});
    })
}

exports.add = function(req, res){
    res.render('categories/add');
}

exports.create = function (req, res) {

    var col = new category(req.body);
    col.save(function (err, e) {
        if (err)
        { 
            res.redirect('./');
        }
        else res.redirect('./');
    });
    
};

exports.edit = function(req, res){
   
    let category = {
        name: req.params.name
    }

    console.log('name', category);
    res.render('categories/edit', {category});
}