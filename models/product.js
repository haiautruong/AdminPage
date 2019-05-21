const mongoose = require("mongoose");

const product = new mongoose.Schema(
    {
        brandCode: Number,
        categoryCode: Number,
        name: String,
        price: Number,
        vote: Number,
        available: Number,
        voucher: String,
        cpu: String,
        ram: String,
        disk: String,
        screen: String,
        gpu: String,
        audio: String,
        apdapter: String,
        pin_battery: String,
        keyboard: String,
        more_info: String,
        weight: String,
        warranty: String,
        image: String,
        view: Number,
        sell: Number,
        addDate: String
    },
    {timestamps: true}
)

module.exports = product;