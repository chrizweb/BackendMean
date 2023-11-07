const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:{type:String, require:true},
  user:{type:String, require:true},
  email:{type:String, require:true},
  password:{type:String, require:true},
  telephone:{type:String, require:true},
},{
  timestamps:true
});

module.exports = mongoose.model('User', UserSchema);