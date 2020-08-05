const mongoose = require("mongoose");
const config = require('dotenv').config()
const uri = process.env.ATLAS;
const mangoosbase = mongoose.connect(uri ,
{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false })
    .then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports = mangoosbase