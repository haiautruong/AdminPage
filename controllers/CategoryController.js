const dbs = require('../dbs/index');
let category = dbs.category;

exports.index = function (req, res) {
    if (req.isAuthenticated()) {
        res.render('categories/index');
    }
    else {
        req.session.returnTo = '/categories';
        res.redirect('/')
    }
}

exports.add = function (req, res) {
    res.render('categories/add');
}

exports.create = function (req, res) {
    if (req.isAuthenticated()) {
        let name = req.body.newcategory;
        let col = new category({
            name
        });

        col.save(function (err) {
            if (err) {
                res.redirect('/categories/add');
            }
            else {
                res.redirect('/categories');
            }
        });
        
    }
    else {
        req.session.returnTo = '/categories';
        res.redirect('/')
    }


};

exports.edit = function (req, res) {

    let category = {
        name: req.params.name
    }

    res.render('categories/edit', { category });
}