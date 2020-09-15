const mongoose = require("mongoose");
autoIncrement = require('mongoose-auto-increment');
require('mongoose-type-html');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const messageSchema = new Schema(
{
    deleted: {type: Boolean},
    draft: {type : Boolean},
    read: {type : Boolean},
    to : {     type:String,     required:true},
    idmessage: { type:Number},
    from: {type :String , required:true} ,
    fromid: {type :String , required:true} ,
    fromAddress: {type :String},
    subject:{type :String,  required:true} ,
    dtSent: {type :String},
    body: {type : mongoose.SchemaTypes.Html ,  required:true},
    repalymessage: [{idmessage : String, fromreplay:String,repalymessage:String}],
    datecreaction : {  type:String }

  });

  messageSchema.plugin(autoIncrement.plugin, {model :'Message' , field: 'idmessage' , startAt: 1 })
  const Message = mongoose.model("Message", messageSchema);

module.exports = Message;