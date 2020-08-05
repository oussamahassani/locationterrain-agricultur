const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const config = require('dotenv').config()


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELOCME AND GOODBYE");
});

const uri = process.env.ATLAS;
mongoose.connect( 'mongodb+srv://oussama:oussama@cluster0-memm7.mongodb.net/lital?retryWrites=true&w=majority',
{ useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false })
    .then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));


const propertiesRouter = require("./routes/properties");
app.use("/properties", propertiesRouter);
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
