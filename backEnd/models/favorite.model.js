const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const favoriteSchema = new Schema(
  {
    idannonce: {
      type: Number,
    },
    price: {
      type: Number,
    },
    bedrooms: {
      type: Number,
    },
    bathrooms: {
      type: Number,
    },
    area: {
      type: Number,
    },
    houseNumber: {
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
    }
  },
  
);
favoriteSchema.plugin(autoIncrement.plugin, { model: 'favorite', field: 'idannonce' , startAt: 1 })
const Favoriteannonce = mongoose.model("favorite", favoriteSchema);

module.exports = Favoriteannonce
;
