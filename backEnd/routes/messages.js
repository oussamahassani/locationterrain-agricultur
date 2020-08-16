const router = require("express").Router();
let Messages = require("../models/messages.model");
let User = require ("../models/user.model")
const moment = require('moment');
const { json } = require("body-parser");

router.route("/sendemessage").post( async (req, res) => {
    console.log("user message",req.body.message)
    let to = ""
    if( req.body.message.new)
    {
  const user =  await User.find({email : req.body.message.to})
      if (user.length > 0)
      {
        to= JSON.stringify(user[0]._id)
      }
      else
      {
          res.status(200).send("email non valide")
      }
    }
    else {
        to = message.to;
    }
   
    const message = req.body.message
    console.log(message)
    const deleted = message.deleted;
    const draft = message.draft;
    const read = message.read;
    const from = message.from;
    const fromAddress = message.fromAddress;
    const subject = message.subject;
    const dtSent = moment().format("DD/MM/YYYY, h:mm:ss a") ;
    const body = message.body;
    const fromreplay = message.fromreplay;
    const repalymessage = message.repalymessage;
      
    const newmessage = new Messages({
        deleted,
        read,
        to,
        draft,
        from,
        fromAddress,
        subject,
        dtSent,
        body,
        fromreplay,
        repalymessage,

    });

    newmessage.save()
        .then(() => res.json("message  envoiyer!"))
        .catch(err => res.status(200).json("Error: " + err));
});

router.route("/getmessage/:id").get((req, res) => {

    Messages.find({ to: req.params.id })
        .then(mes => {res.json(mes)})
        .catch(err => res.json(err))

});
// update lire message 
router.route("/updatemessage/:id").patch((req,res) => {
    console.log(req.body.read , req.params.id)
Messages.findByIdAndUpdate(req.params.id , {read: req.body.read})
.then(res => res.send("done"))
.catch(err => res.send(err))
})
router.route("/updatemessagedraft/:id").patch((req,res) => {
    Messages.findByIdAndUpdate(req.params.id , {draft: req.body.draft})
.then(user => res.send({msg : "Message Envoiyer"}))
.catch(err => res.send(err))
})
// update  replay message
router.route ("/updatemessagerie/:id").patch(async(req,res) => {
    console.log(req.body , req.params.id)
   /* Messages.repalymessage.push(req.body);
    Messages.save(done)*/
    await Messages.findByIdAndUpdate(req.params.id, {$push: {repalymessage: req.body}})
   
    .then(donner => res.json(donner))
.catch(err => res.json(err))
})
// update delate message 
router.route("/delate/:id").patch(async  (req,res) => {
   await Messages.findByIdAndUpdate(req.params.id ,req.body)
  await Messages.findById(req.params.id)
               .then(donner => res.json(donner))
               .catch (err => res.send(err))
})

module.exports = router;