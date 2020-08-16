const router = require("express").Router();
const moment = require('moment');
const multer = require("multer");
let Property = require("../models/property.model");
const upload = multer();

router.route("/allannonce").get((req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  Property.find()
    .then(properties => res.json(properties))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/addproperties").post((req, res) => {
 
  console.log(req.body)



  const price = Number(req.body.price);
  const espace = Number(req.body.espace);
  const longitude = Number(req.body.longitude);
  const altitude = Number(req.body.altitude);
  const typelocation = req.body.typelocation;
  const street = req.body.street;
  const typebien = req.body.typebien;
  const city = req.body.city;
  const province = req.body.province;
  const postalCode = req.body.postalCode;
  const description = req.body.description;
  const image = req.body.image;
  const idcreateur = req.body.idcreateur;
  let datenow = moment().format("DD/MM/YYYY, h:mm:ss a")
  const datecreation = datenow;
  const newProperty = new Property({
    price,
    espace,
    longitude,
    altitude,
  typelocation,
  street,
  typebien,
    city,
    province,
    postalCode,
    description,
    image,
    idcreateur,
    datecreation
  });

  newProperty
    .save()
    .then(() => res.json("Property added!"))
    .catch(err => res.status(200).json("Error: " + err));
});

router.route("/properties/:id").get((req, res) => {
  Property.findById(req.params.id)
    .then(Property => res.json(Property))
    .catch(err => res.status(200).json("Error: " + err));
});

/*
router.route("properties/:id").delete(async (req, res) => {
  try {
    const produit = await Property.findByIdAndDelete(req.params.id) 
    if (!produit) return res.status(404)
    .send({msg : "non exsiste"})
    res.send({msg : "produit  delated "})
}
catch(error){
    res.status(500).send("serveur error")
}
/*
  console.log("id",req.params.id)
  Property.findByIdAndDelete(req.params.id)
    .then(() => res.json("Property deleted."))
    .catch(err => res.status(200).json("Error: " + err));
    
});
*/
router.delete("/delateannonces/:id",async (req, res) => {
  
  try {
    console.log(req.params.id)
    const produit = await Property.findByIdAndDelete(req.params.id) 
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    if (!produit) return res.status(404)
    .send({msg : "non exsiste"})
    res.send({msg : "produit  delated "})
}
catch(error){
    res.status(500).send("serveur error")
}

})
router.route("/updateeannonces/:id").patch((req, res) => {
  try{
  const annonce = req.body
  console.log(annonce)
  Property.findByIdAndUpdate(req.params.id ,annonce)
        .then(() => res.json("Property updated!"))
        .catch(err => res.status(400).json("Error: " + err));
  }
        catch (error) {
          res.status(500).send("serveur error")
        }
   
});

module.exports = router;
