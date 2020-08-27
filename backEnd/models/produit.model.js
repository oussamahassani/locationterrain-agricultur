const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
require('mongoose-type-html');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const ProduitSchema = new Schema(
{
    idproduit : {type:Number},
    Titel: { type:String},
    Prix: {type :String , required:true} ,
    Description: {type :String},
    image:{type :String,  required:true} ,
    Discount: {type :String},
    

  });

  ProduitSchema.plugin(autoIncrement.plugin, {model :'Produit' , field: 'idproduit' , startAt: 1 })
  const Produit = mongoose.model("Produit", ProduitSchema);

module.exports = Produit;