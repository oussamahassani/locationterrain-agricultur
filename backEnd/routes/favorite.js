const router = require("express").Router();
let Favorite = require("../models/favorite.model");
router.route("/annocefavorite").post((req, res) => {
  const favorite = req.body.annonce[0]
   console.log(favorite)
  
    const newfavorite = new Favorite(favorite);
  
    newfavorite.save()
      .then(() => res.json("Favorite  added!"))
      .catch(err => res.status(200).json("Error: " + err));
  });
  
  router.route("/delateannocefavorite/:id").delete((req, res) => {
    Favorite.findByIdAndDelete(req.params.id)
    .then(() => res.json("annonce favorit deleted."))

  })
  router.route("/allannoncefavorite").get((req, res) => {
    Favorite.find()
      .then(fav => res.json(fav))
      .catch(err => res.status(400).json("Error: " + err));
  });

  module.exports = router