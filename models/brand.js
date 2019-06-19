const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

brandSchema.statics.getAllBrands = () => {
    return Brand.find();
}

brandSchema.statics.getAPage = (perPage, pageNumber) => {
    return Brand.find()
        .limit(perPage)
        .skip(perPage * (pageNumber - 1))
}

brandSchema.statics.countAll = () => {
    return Brand.countDocuments();
}

const Brand = mongoose.model('brand', brandSchema);

module.exports = Brand;