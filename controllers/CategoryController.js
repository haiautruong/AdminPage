const dbs = require('../dbs/index');
let category = dbs.category;

exports.index = function(req, res){
    if (req.isAuthenticated()) {
        res.render('categories/index');
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