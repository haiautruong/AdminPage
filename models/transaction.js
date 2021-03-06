const mongoose = require("mongoose");

let transactionSchema = mongoose.Schema(
    {
        idUser: { type: mongoose.Schema.Types.ObjectId, required: true },
        listProducts: Array,
        total: Number,
        address: String,
        status: Number, // -1 Đang xử lý, 0 Đang giao, 1 Đã giao,
        phone: String
    },
    {
        timestamps: true,
        versionKey: false
    }
)

transactionSchema.statics.updateATran = (id, address, status) => {
    const query = {
        _id: id
    };

    return Transaction.findOneAndUpdate(query, {
        address: address,
        status: status
    });
}
transactionSchema.statics.getOne = (id) => {
    const query = {
        _id: id
    };

    return Transaction.find(query);
}

transactionSchema.statics.gettransaction = (idUser) => {
    const query = {
        idUser: idUser
    };

    return Transaction.find(query)
        .sort({
            createdAt: -1
        });
}

transactionSchema.statics.getAll = () => {
    return Transaction.find()
        .sort({
            createdAt: -1
        });
}

transactionSchema.statics.countAll = () => {
    return Transaction.countDocuments();
}

transactionSchema.statics.getAPage = (perPage, pageNumber) => {
    return Transaction.find()
        .limit(perPage)
        .skip(perPage * (pageNumber - 1))
}

let Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;