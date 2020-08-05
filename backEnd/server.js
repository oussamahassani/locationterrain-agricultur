let express = require("express");
let  cookieParser = require('cookie-parser')
let app = express();
const multer = require('multer')
let Property = require("./models/property.model");
/*const cors = require("cors");*/
const basededonne = require("./config/config")
const bodyParser = require('body-parser');
let personne = require("./routes/users")
let annonce = require ("./routes/properties")
let favorite = require ("./routes/favorite")
let message = require ("./routes/messages")
app.use(cookieParser())

/*app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/

app.use(function (req,res,next){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
res.header('Access-Control-Allow-Credentials', true);
/*res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept')*/
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
/*res.header('Access-Control-Request-Method','GET,PUT,POST,DELETE,PATCH,OPTIONS')*/
next()
})


/*app.use(cors())*/
/*
const corsOptions = {
  origin: [
    "http://localhost", "http://localhost:3000", "http://localhost:4000",
    "*"
    ],
  methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
  credentials: true,                // required to pass
  exposedHeaders: ["set-cookie","Authorization"],
};

*/
app.use(express.json());
//app.use(bodyParser.json());





app.use("/app",personne);
app.use("/app",annonce);
app.use("/app",favorite);
app.use("/app",message)
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/image')
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname )
  }
})

var upload = multer({ storage: storage }).array('file')

app.get('/',function(req,res, next){
  return res.cookie('salh', 'momahed').send('cookie set')
next()
})

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
app.listen(4000 ,() => {
  console.log("Server running on port 4000");
});
