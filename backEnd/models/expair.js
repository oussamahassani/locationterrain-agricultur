const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 const partenarShema = new Schema (
{
   Nom : {type:String},
   description: {type:String},
   Photo: {type:String},
   Linkedden: {type:String},
   resauxsociaux : {type:String},
   Nivaux : {type:String},
   Post : {type:String},




}

 )
 const Expaire = mongoose.model("Expaire", partenarShema);

 module.exports = Expaire;