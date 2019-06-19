const dbs = require('../dbs/index');
let Transaction = dbs.transaction;

exports.index = function (req, res) {
    if (req.isAuthenticated()) {
        Transaction.getAll().exec((err, list) => {
            if (err) {
                console.log("all orders err: ", err);
            }
            else {
                res.render('orders/index', { list });
            }
        })
    }
    else {
        req.session.returnTo = '/orders';
        res.redirect('/')
    }
}

exports.edit = function (req, res) {
    if (req.isAuthenticated()) {
        Transaction.getOne(req.params.id).exec((err, transaction) => {
            if (err) {
                console.log('err transaction: ', err);
            }
            else {
                let trans = transaction[0]
                console.log(trans);
                // let trans = new Transaction({
                //     id: docs._id,
                //     idUser: docs.idUser,
                //     address: docs.address,
                //     listProducts: docs.listProducts,
                //     total: docs.total,
                //     status: docs.status
                // })
                res.render('orders/edit', { trans });
            }
        })
    }
    else {
        req.session.returnTo = '/orders/edit/' + req.params.id;
        res.redirect('/')
    }
}

exports.update = (req, res) => {
    let id = req.body.id;
    let address = req.body.address;
    let status = parseInt(req.body.status);

    console.log("call herre");
    Transaction.updateATran(id, address, status).exec((err, result) => {
        console.log("call herr rese", err, result);

        if (err) {
            console.log('err transaction: ', err);
        }
        else {
            res.redirect('/orders')
        }
    })

}
