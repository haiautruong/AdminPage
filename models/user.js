const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, lowercase: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    cmnd: {type: String, required: true}
  },
  {
    timestamps: true,
    versionKey: false
  }
)


UserSchema.statics.getAll = () => {
  return User.find();
}

UserSchema.statics.countAll = () => {
  return User.countDocuments();
}

UserSchema.statics.getAPage = (perPage, pageNumber) => {
  return User.find()
      .limit(perPage)
      .skip(perPage * (pageNumber - 1))
}

var User = mongoose.model('User', UserSchema);

module.exports = User;