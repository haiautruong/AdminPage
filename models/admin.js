const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const AdminSchema = new mongoose.Schema(
    {
        username: {type: String, required: true, lowercase: true, unique: true},
        password: {type: String, required: true},
        fullname: {type: String},
        phone: {type: String, required: true},
        address: {type: String, required: true},
        email: {type: String, required: true},
    },
    
    {timestamps: true}
)

//authenticate input against database
AdminSchema.statics.authenticate = function (username, password, callback) {
    Admin.findOne({ username: username })
      .exec(function (err, Admin) {
        if (err) {
          return callback(err)
        } else if (!Admin) {
          var err = new Error('Admin not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, Admin.password, function (err, result) {
          if (result === true) {
            return callback(null, Admin);
          } else {
            return callback();
          }
        })
      });
  }
  
  //hashing a password before saving it to the database
  AdminSchema.pre('save', function (next) {
    var Admin = this;
    bcrypt.hash(Admin.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      Admin.password = hash;
      next();
    })
  });
  
  
  var Admin = mongoose.model('admin', AdminSchema);

module.exports = Admin;