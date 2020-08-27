let Favorite = require("../models/favorite.model");
const router = require("express").Router();
router.route("/allannoncefavorite").get(async (req, res) => {
  
    await Favorite.find()
     .then(fav => res.json(fav))
        .catch(err => res.status(401).send("Error:" + err)); 
        
    });

    module.exports = router