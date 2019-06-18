const dbs = require('../dbs/index');
let User = dbs.user;

exports.index = function(req, res){
    if (req.isAuthenticated()) {
        User.getAll().exec((err, list) => {
            if(err){
                console.log("all user err: ", err);
            }
            else{
                res.render('users/index', {list});
            }
        })
    }
    else {
        req.session.returnTo = '/users';
        res.redirect('/')
    }
}