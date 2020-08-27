const router = require("express").Router();
const moment = require('moment');
let Favorite = require("../models/favorite.model");
router.route("/annocefavorite").post( async (req, res) => {
  const favorite = req.body.obj
   console.log(favorite)
  if (Object.keys(favorite).length <  10)
  {
    console.log("ultierement")
    res.status(200).json({msg: "merci de réessayer ultérieurement "})
  }
  else {
    const idannonceorigin =  favorite._id;
    const price = favorite.price;
    const espace = favorite.espace;
    const longitude = favorite.longitude;
    const altitude = favorite.altitude;
    const typelocation = favorite.typelocation;
    const street = favorite.street;
    const typebien = favorite.typebien;
    const city = favorite.city;
    const province = favorite.province;
    const postalCode = favorite.postalCode;
    const description = favorite.description;
    const image = favorite.image;
    const idcreateur = favorite.idcreateur;
    const datecreation = moment().format("DD/MM/YYYY, h:mm:ss a");
    const nomuser = favorite.nomuser;
    const prenomuser =favorite.prenomuser;
    const emailuser = favorite.emailuser;
    const numtel =  favorite.numtel;
    const Utilisateur = favorite.Utilisateur
   const findexiste = await Favorite.find({Utilisateur : Utilisateur, idannonceorigin:idannonceorigin })
   console.log(findexiste)
   if (findexiste.length >= 1)
  { res.json({msg : "annonce existant deja"})
   res.end("resulta " ,findexiste)
  }
   else 
{
    const newfavorite = new Favorite({
      idannonceorigin,
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
      datecreation,
      nomuser,
      prenomuser,
      emailuser,
      numtel,
      Utilisateur

    });
  
    newfavorite.save()
      .then(() => res.json({msg :"Favorite  added!"}))
      .catch(err => res.status(200).json("Error: " + err));
    }
  }
  });
  
  router.route("/delateannocefavorite/:id").delete((req, res,next) => {
    Favorite.findByIdAndDelete(req.params.id)
    .then(() => res.json("annonce favorit deleted."))

  })
 

  module.exports = router