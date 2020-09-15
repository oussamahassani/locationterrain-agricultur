const router = require("express").Router();
const moment = require('moment');
let Produit = require("../models/produit.model");
router.route("/allProduit").get((req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  Produit.find()
    .then(properties => res.json(properties))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/addnewproduit").post((req, res) => {
 

  const Titel = req.body.Titel;
  const Prix = req.body.Prix;
  const Description = req.body.Description;
  const image = req.body.image ;
  const Discount = req.body.Discount;
  

  const newProperty = new Produit({
    Titel,
    Prix,
    Description,
    image,
    Discount,
  });

  newProperty
    .save()
    .then(() => res.json("Produit added!"))
    .catch(err => res.status(200).json("Error: " + err));
});

router.route("/Produit/:id").get((req, res) => {
  Produit.findById(req.params.id)
    .then(Property => res.json(Property))
    .catch(err => res.status(200).json("Error: " + err));
});


router.delete("/delateProduit/:id",async (req, res) => {
  
  try {
 
    const produit = await Produit.findByIdAndDelete(req.params.id) 
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    if (!produit) return res.status(404)
    .send({msg : "non exsiste"})
    res.send({msg : "produit  delated "})
}
catch(error){
    res.status(500).send("serveur error")
}

})
router.route("/updateeProduit/:id").patch((req, res) => {

  try{
  const produit = req.body
 console.log('ok',produit,req.params.id)
  Produit.findByIdAndUpdate(req.params.id ,produit)
        .then(() => res.json("Produit updated!"))
        .catch(err => res.status(400).json("Error: " + err));
  }
        catch (error) {
          res.status(200).send(error)
        }
   
});

module.exports = router;
