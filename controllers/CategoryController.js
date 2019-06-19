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
    if (req.isAuthenticated()) {
        let mess = req.flash('message')[0];
        res.render('categories/add', { mess });
    }
    else {
        req.session.returnTo = '/categories/add';
        res.redirect('/')
    }
}

exports.create = function (req, res) {
    if (req.isAuthenticated()) {
        let name = req.body.newcategory;
        category.findByName(name).exec((err, docs) => {
            if (err) {
                console.log("err find category: ", errr);
            }
            else {
                if (docs.length > 0) {
                    req.flash('message', "Danh mục đã tồn tại");
                    res.redirect('/categories/add');
                }
                else {
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
            }

        })
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