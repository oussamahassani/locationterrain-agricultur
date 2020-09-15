const router = require('express').Router()
let Pannier = require('../models/pannier.model')

router.route("/getallpannierproduit").get((req,res) => {
    Pannier.find()
    .then( produit => res.send(produit))
    .catch(err => res.send(err))
})
router.route("/postTopannier").post((req,res) => {
    console.log(req.body)
const Titel = req.body.Titel
const Prix = req.body.Prix
const Description = req.body.Prix
const image = req.body.image
const iduser = req.body.iduser
 const newproduit = new  Pannier({
    Titel,
    Prix,
    Description,
    image,
    iduser
 })
 newproduit.save()
 .then( reusult => res.send("ajouter avec succeés"))
 .catch(err => res.send("err"))

})
router.route("/delateallproduit/:id").delete((req,res) => {
    console.log(req.params)
    Pannier.deleteMany({iduser : req.params.id})
    .then(delated => res.send("tout les produit sont effacer"))
    .catch(err => res.send(err))

    })

router.route("/delateoneproduit/:id").delete((req,res) => {
    console.log("delate one produit id",req.params.id)
    Pannier.findByIdAndRemove({_id : req.params.id})
    .then(panier => res.send("delated produit"))
    .catch (err => res.send(err))

})



module.exports = router
