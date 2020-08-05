const router = require("express").Router();
let Messages = require("../models/messages.model");


router.route("/sendemessage").post((req, res) => {
    const message = req.body.message
     console.log(message)
    
      const newmessage = new Messages(message);
    
      newmessage.save()
        .then(() => res.json("message  envoiyer!"))
        .catch(err => res.status(200).json("Error: " + err));
    });

router.route("/getmessage/:id").get((req,res) => {
    Messages.find({from : req.params.id})
   .then(mes =>res.json(mes) )
   .catch(err => res.json(err))
  
});

module.exports = router;