const mongoose = require('mongoose');
const dbs = require('../dbs/index');
const Brand = dbs.brand;
const Category = dbs.category;
const Product = dbs.product;
const Transaction = dbs.transaction;
const User = dbs.user;

const PRODUCTS = 'products';
const CATEGORY = 'categories';
const BRANDS = 'brands';
const USERS = 'users';
const TRANSACTIONS = 'orders';


exports.paginate = (req, res) => {
    let data = null;
    let collection = req.query.type;
    let perPage = parseInt(req.query.pageSize);
    let page = Math.max(0, parseInt(req.query.pageNumber));
    let COLLECTION = '';
    if (collection === PRODUCTS) {
        COLLECTION = Product;
        data = {
            products: null,
            pageNumber: null,
            total: null
        }
    }
    else if(collection === CATEGORY){
        COLLECTION = Category;
        data = {
            categories: null,
            pageNumber: null,
            total: null
        }
    }
    else if(collection === BRANDS){
        COLLECTION = Brand;
        data = {
            brands: null,
            pageNumber: null,
            total: null
        }
    }
    else if(collection === TRANSACTIONS){
        COLLECTION = Transaction;
        data = {
            orders: null,
            pageNumber: null,
            total: null
        }
    }
    else if(collection === USERS){
        COLLECTION = User;
        data = {
            users: null,
            pageNumber: null,
            total: null
        }
    }
    COLLECTION.getAPage(perPage, page).exec((err, docs) => {
        if (err) {
            console.log("err product paginate: ", err);
        }
        else {
            COLLECTION.countAll().exec((err, count) => {
                if(err){
                    console.log("err count all paginate: ", err);
                }
                else{
                    data[collection] = docs;
                    data.pageNumber = page;
                    data.total = count;
                    res.send(data);
                }
            })
        }
    });
}
