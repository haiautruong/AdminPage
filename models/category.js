const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

CategorySchema.statics.getAllCategories = () => {
    return Category.find();
}

CategorySchema.statics.countAll = () => {
    return Category.countDocuments();
}

CategorySchema.statics.getAPage = (perPage, pageNumber) => {
    return Category.find()
        .limit(perPage)
        .skip(perPage * (pageNumber - 1))
}


const Category = mongoose.model('category', CategorySchema);

module.exports = Category;