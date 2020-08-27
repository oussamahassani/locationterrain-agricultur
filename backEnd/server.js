let express = require("express");
let  cookieParser = require('cookie-parser')
let app = express();
const multer = require('multer')
const cors = require("cors");
const basededonne = require("./config/config")
let personne = require("./routes/users")
let annonce = require ("./routes/properties")
let favorite = require ("./routes/favorite")
let allfavorite = require ("./routes/Allgetfavorite")
const withAuth = require('./routes/middlwaretoken');
let message = require ("./routes/messages")
let produit = require("./routes/produit")
const Port = process.env.Port  || 4000
app.use(cookieParser())
require('events').EventEmitter.defaultMaxListeners = 25


app.use(function (req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
res.header('Access-Control-Allow-Credentials', true);
/*res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')*/
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
/*res.header('Access-Control-Request-Method','GET,PUT,POST,DELETE,PATCH,OPTIONS')*/
next()
})
app.use(cors({credentials: true, origin: true}));


app.use(express.json());
//app.use(bodyParser.json());




app.use("/app",produit);
app.use("/app",personne);
app.use("/app",annonce);
app.use("/app",allfavorite);
  app.use("/app",withAuth,favorite);
app.use("/app",withAuth,message)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/image')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
  }
})

var upload = multer({ storage: storage }).array('file')



app.post('/upload',function(req, res , next) {
  
  upload(req, res, function (err) {
   
      if (err instanceof multer.MulterError) {
          return res.status(500).json(err + "muttelerror")
        // A Multer error occurred when uploading.
      } else if (err) {
          return res.status(500).json(err +"uncow error")
        // An unknown error occurred when uploading.
      } 
      
      return res.status(200).send(req.file)
      // Everything went fine.
    })

});
app.get('/',function(req,res){
  return res.send('Hello Server')
})
app.listen(Port ,() => {
  console.log("Server running on port " + Port);
});
