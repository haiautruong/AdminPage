const dbs = require('../dbs/index');
let Product = dbs.product;
let Brand = dbs.brand;
let Category = dbs.category;
exports.index = function(req, res){
    if (req.isAuthenticated()) {
        res.render('products/index');
    }
    else {
        req.session.returnTo = '/products';
        res.redirect('/')
    }
}

exports.add = function(req, res){
    let mess = req.flash('message');
    if (req.isAuthenticated()) {
        Category.getAllCategories().exec((err, listCategories) => {
            if(err){
                console.log("err add product list category: ", err);
            }
            else{
                Brand.getAllBrands().exec((err, listBrands) => {
                    if(err){
                        console.log("err add product list brand: ", err);
                    }
                    else{
                        res.render('products/add', {mess, listBrands, listCategories});
                    }
                })
            }
        })
    }
    else {
        req.session.returnTo = '/products/add';
        res.redirect('/');
    }
}

exports.edit = function(req, res){
    let mess = req.flash('message');
    if (req.isAuthenticated()) {
        res.render('products/edit', {mess});
    }
    else {
        req.session.returnTo = '/products/edit';
        res.redirect('/')
    }
}

exports.create = (req, res) => {
    if (req.isAuthenticated()) {
        let name = req.body.name;
        let category = req.body.selectCategory;
        let categoryCode = category.split(' - ')[1];
        let price = req.body.price;
        let brand = req.body.selectBrands;
        let brandCode = brand.split(' - ')[1]
        let image = req.body.image;
        let screen = req.body.screen;
        let ram = req.body.ram;
        let cpu = req.body.cpu;
        let voucher = req.body.voucher;
        let disk = req.body.disk;
        let warranty = req.body.warranty;
        let pin_battery = req.body.pin_battery;

        Product.findByName(name).exec((err, docs) => {
            if (err) {
                console.log("err find product: ", errr);
            }
            else {
                if (docs.length > 0) {
                    req.flash('message', "Tên sản phẩm đã tồn tại");
                    res.redirect('/products/add');
                }
                else {
                    let col = new Product({
                        name,
                        categoryCode,
                        price,
                        brandCode,
                        image,
                        screen,
                        ram,
                        cpu,
                        voucher,
                        disk,
                        warranty,
                        pin_battery
                    });
                    col.save(function (err) {
                        if (err) {
                            res.redirect('/products/add');
                        }
                        else {
                            res.redirect('/products');
                        }
                    });
                }
            }
        })
    }
    else {
        req.session.returnTo = '/products';
        res.redirect('/')
    }
}