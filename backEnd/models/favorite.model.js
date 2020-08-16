const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
  {
    idannonceorigin: {
      type: String,
    },
    idannonce: {
      type: Number,
    },
    price: {
      type: Number,
    },
  
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    province: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    nomuser:{
type:String
    },
  prenomuser:{
    type:String
  },
  emailuser:{
type:String
  },
  numtel:{
    type:Number
  },
  datecreation:{
    type:String
  },
  Utilisateur:{
    type:String
  }
  }
  
);
favoriteSchema.plugin(autoIncrement.plugin, { model: 'favorite', field: 'idannonce' , startAt: 1 })
const Favoriteannonce = mongoose.model("favorite", favoriteSchema);

module.exports = Favoriteannonce
;
