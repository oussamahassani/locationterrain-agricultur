const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
require('mongoose-type-html');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const PannierSchema = new Schema(
{
    idproduit : {type:Number},
    Titel: { type:String},
    Prix: {type :String , required:true} ,
    Description: {type :String},
    image:{type :String,  required:true} ,
    iduser : {type : String}
  

    

  });

  PannierSchema.plugin(autoIncrement.plugin, {model :'Pannier' , field: 'idproduit' , startAt: 1 })
  const Pannier = mongoose.model("Pannier", PannierSchema);

module.exports = Pannier;