const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    idmessage:{
        type:Number,
    },
    titre:{
        type:String,
        required:true
    },
    message : {
        type:String,
        required:true
    },
    from :{
        type:String,
        required:true
    },
    to : {
        type:String,
        required:true
    },
    datecreaction : {
        type:String
    }

  });

  messageSchema.plugin(autoIncrement.plugin, {model :'Message' , field: 'idmessage' , startAt: 1 })
  const Message = mongoose.model("Message", messageSchema);

module.exports = Message;