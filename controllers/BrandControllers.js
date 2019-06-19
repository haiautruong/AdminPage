const dbs = require('../dbs/index');
let Brand = dbs.brand;

exports.index = function(req, res){
    if (req.isAuthenticated()) {
        res.render('brands/index');
    }
    else {
        req.session.returnTo = '/brands';
        res.redirect('/')
    }
}