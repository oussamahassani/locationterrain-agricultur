const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const userSchema = new Schema(
 
  {
    Iduser: {
      type: Number
    },
    Nom: {
      type: String,
      required: true,
      minlength: 3
    },
    Prenom: {
      type: String,
      required: true,
      minlength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 3
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    typeuser: {
      type: String,
    },
    adress: {
      type:String
    },
    numtelephone: {
      type: String,
    },
    genre:{
      type: String,
    },
    status:{
      type: String,
    },
    datecreation: {
      type: String,
    },
    Photo:{
      type:String
    }
  },
  {timestamps: true} 
 
);
userSchema.plugin(autoIncrement.plugin, { model: 'user', field: 'Iduser' , startAt: 1 })
module.exports = mongoose.model('user',userSchema, 'users')

