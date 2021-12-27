const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const rFlight = require('./Reserve');

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique : true,
  },
  Password: {
    type: String,
    required: true
  },
 
  Age: {
    type: Number,
    required: true,
  },
  BornIn: {
    type: String,
    required: true
  },
  LivesIn: {
    type: String,
    required: true
  },
  MartialStatus: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true,
    unique : true,
  },
  isAdmin: {
    type: Boolean,
    default:false,
  },
  ReservedFlights: {
    type: [],
  },
  ReservedSeats: {
    type: [],
  },

 
}, { timestamps: true });










userSchema.methods.comparePassword = function(Password,next){
  bcrypt.compare(Password,this.Password,function(err,match){
      if(err){
          console.log('Compare Failed');
          return next(err,false);
      }
      return next(null,match); //true
  })
}

userSchema.pre("save", function (next) {
let user = this;
if (user.isModified("Password")) {
  return bcrypt.hash(user.Password, 12, function (err, hash) {
    if (err) {
      console.log("BCRYPT HASH ERR ", err);
      return next(err);
    }
    user.Password = hash;
    return next();
  });
} else {
  return next();
}
});







const User = mongoose.model('User', userSchema);
module.exports = User;