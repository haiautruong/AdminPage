const product = require('../models/product');

exports.index = async (rep, res, next) => {
    res.render('products/index', {
        title: 'Danh sách sản phẩm'
    });
}
