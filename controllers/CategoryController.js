const dbs = require('../dbs/index');
let category = dbs.category;

exports.index = function(req, res){
    if (req.isAuthenticated()) {
        category.getAllCategories().exec((err, list) => {
            if(err){
                console.log("all product err: ", err);
            }
            else{
                res.render('categories/index', {list});
            }
        })
    }
    else {
        req.session.returnTo = '/categories';
        res.redirect('/')
    }
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

    res.render('categories/edit', {category});
}