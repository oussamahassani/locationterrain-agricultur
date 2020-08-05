const mongoose = require("mongoose");

autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    idannonce: {
      type: Number,
    },
    idcreateur: {
      type:String
    },
    price: {
      type: Number,
      required: true
    },
    espace: {
      type: String,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
    altitude: {  
      type: Number,
      required: true
    },
    typelocation: {
      type: String,
      required: true
    },
    street: {  
      type: String,
      required: true,
    },
    city: { 
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    postalCode: { 
      type: String,
      required: true,

    }, 
    description: { 
      type: String,
      required: true,
      trim: true,
      minlength: 10
    },
    typebien:{ 
      type: String,
      required: true,
    },
    image: {  
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
propertySchema.plugin(autoIncrement.plugin, { model: 'Property', field: 'idannonce' , startAt: 1 })
const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
