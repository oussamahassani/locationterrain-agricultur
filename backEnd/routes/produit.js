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
 
  console.log(req.body)

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
    console.log(req.params.id)
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
  const Produit = req.body
 
  Produit.findByIdAndUpdate(req.params.id ,Produit._id)
        .then(() => res.json("Produit updated!"))
        .catch(err => res.status(400).json("Error: " + err));
  }
        catch (error) {
          res.status(500).send("serveur error")
        }
   
});

module.exports = router;
