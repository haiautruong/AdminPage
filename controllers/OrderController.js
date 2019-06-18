const dbs = require('../dbs/index');
let Transaction = dbs.transaction;

exports.index = function(req, res){
    if (req.isAuthenticated()) {
        Transaction.getAll().exec((err, list) => {
            if(err){
                console.log("all orders err: ", err);
            }
            else{
                res.render('orders/index', {list});
            }
        })
    }
    else {
        req.session.returnTo = '/orders';
        res.redirect('/')
    }
}