const router = require("express").Router();
const moment = require('moment');
let Expair = require("../models/expair");
router.route("/allpartenair").get((req, res) => {
  Expair.find()
    .then(properties => res.json(properties))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/addpartenair").post((req, res) => {
 

  const Nom = req.body.Nom;
  const description = req.body.description;
  const Photo = req.body.Photo;
  const Linkedden = req.body.Linkedden ;
  const resauxsociaux = req.body.resauxsociaux;
  const Nivaux = req.body.Nivaux ;
  const Post = req.body.Post;
  const newProperty = new Expair({
    Nom,
    description,
    Photo,
    Linkedden,
    resauxsociaux,
    Nivaux,
    Post,
  });

  newProperty
    .save()
    .then(() => res.json("expair added!"))
    .catch(err => res.status(200).json("Error: " + err));
});




router.delete("/delatepartenair/:id",async (req, res) => {
  
  try {
 
    const expair = await Expair.findByIdAndDelete(req.params.id) 
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    if (!expair) return res.status(404)
    .send({msg : "non exsiste"})
    res.send({msg : "expair  delated "})
}
catch(error){
    res.status(500).send("serveur error")
}

})


module.exports = router;
