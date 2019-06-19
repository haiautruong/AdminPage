const dbs = require('../dbs/index');
let Brand = dbs.brand;

exports.index = function (req, res) {
    if (req.isAuthenticated()) {
        res.render('brands/index');
    }
    else {
        req.session.returnTo = '/brands';
        res.redirect('/')
    }
}

exports.create = function (req, res) {
    if (req.isAuthenticated()) {
        let name = req.body.newBrand;
        Brand.findByName(name).exec((err, docs) => {
            if (err) {
                console.log("err find brand: ", errr);
            }
            else {
                if (docs.length > 0) {
                    console.log("aaaa", docs.length);
                    req.flash('message', "Nhà sản xuất đã tồn tại");
                    res.redirect('/brands/add');
                }
                else {
                    let col = new Brand({
                        name
                    });
                    col.save(function (err) {
                        if (err) {
                            res.redirect('/brands/add');
                        }
                        else {
                            res.redirect('/brands');
                        }
                    });
                }
            }

        })
    }
    else {
        req.session.returnTo = '/brands';
        res.redirect('/')
    }
};

exports.add = function (req, res) {
    if (req.isAuthenticated()) {
        let mess = req.flash('message')[0];
        res.render('brands/add', { mess });
    }
    else {
        req.session.returnTo = '/brands/add';
        res.redirect('/')
    }
}