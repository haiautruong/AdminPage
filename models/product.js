const mongoose = require("mongoose");

productSchema = mongoose.Schema(
    {
        name: String,
        price: Number,
        image: String,
        categoryCode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category'
        },
        brandCode: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'brand'
        },
        screen: String,
        ram: String,
        cpu: String,
        more_info: String,
        voucher: String,
        pin_battery: String,
        disk: String,
        warranty: String,
        view: Number
    },
    {
        timestamps: true,
        versionKey: false
    }
)
productSchema.statics.findByName = (name) => {
    return Product.find({
        name: name
    });
}

productSchema.statics.getProducts = (type, id) => {

    let query = {};
    if (type == 'category') {
        query = { categoryCode: id };
    } else if (type == 'brand') {
        query = { brandCode: id };
    }

    return Product.find(query)
        .populate('categoryCode')
        .populate('brandCode');
}

productSchema.statics.getAll = () => {
    return Product.find()
        .populate('categoryCode')
        .populate('brandCode')
}

productSchema.statics.getProduct = (id) => {
    return Product.findById(id)
        .populate('categoryCode')
        .populate('brandCode');
}

productSchema.statics.getAPage = (perPage, pageNumber) => {
    return Product.find()
        .limit(perPage)
        .skip(perPage * (pageNumber - 1))
        .populate('categoryCode')
        .populate('brandCode');
}

productSchema.statics.getProducts = (type, id, perPage, pageNumber) => {

    let query = {};

    if (type == 'category') {
        query = { categoryCode: id };
    } else if (type == 'brand') {
        query = { brandCode: id };
    }

    return Product.find(query)
        .limit(perPage)
        .skip(perPage * (pageNumber - 1))
        .populate('categoryCode')
        .populate('brandCode');
}
productSchema.statics.countAll = () => {
    return Product.countDocuments();
}

productSchema.statics.countAllProducts = (type, id) => {
    let query = {};
    if (type == 'category') {
        query = { categoryCode: id };
    } else if (type == 'brand') {
        query = { brandCode: id };
    }

    return Product.countDocuments(query);
}

let Product = mongoose.model('product', productSchema);

module.exports = Product;