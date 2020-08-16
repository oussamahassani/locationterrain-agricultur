const express = require("express")
const router = require("express").Router();
const nodemailer = require('nodemailer')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const moment = require('moment');
let apps= express()
let User = require("../models/user.model");

let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,    //<<here
  auth: {
      user: 'oussamahassanisimplon@gmail.com',
      pass:'ou_2s_ma200'
  }
});
transport.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.route("/getalluser").get((req, res) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/getoneuser/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(User => res.json(User))
    .catch(err => res.status(200).json("Error: " + err));
});
router.route('/getcurentemail/:id').get((req,res) => {
  User.findById(req.params.id)
  .then(User => res.json({email : User.email , Nom : User.Nom , Prenom : User.Prenom}))
  .catch(err => res.status(200).json("Error: " + err));
})
router.route("/registeruser").post((req, res) => {
  const user = req.body
  console.log(user)
  let datenow = moment().format("DD/MM/YYYY, h:mm:ss a")
 try{
  bcrypt.hash(user.password, 10).then(function(hash) {
    // Store hash in your password DB.
    const password =  hash;
    console.log(password)
    Object.assign(user , {"password":password},{"datecreation":datenow})
     const newUser = new User(user);
  newUser.save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(200).json("Error: " + err));
 })
}
 catch(err)
 {
 console.log(err)
 }
});
router.patch('/updateuser/:id' , async (req,res , next) => {
  try{
    const user = req.body
    console.log("user" , user.Prenom , user)
    if(user.oldpass == '')
    {
     User.findByIdAndUpdate(req.params.id ,user)
     .then(() => res.json("Property updated!"))
        .catch(err => res.status(400).json("Error: " + err));
 
    }
    else{
    const userbase = await User.findOne({_id:req.params.id})
    if (userbase) {
      let compare = bcrypt.compareSync(user.oldpass, userbase.password)
      if (compare)
      {
        bcrypt.hash(user.password, 10).then(function(hash) {
      
          user.password =hash
          User.findByIdAndUpdate(req.params.id ,user)
          .then(() => res.json("Property updated!"))
        .catch(err => res.status(400).json("Error: " + err));
        })
      }
      else {
        res.json("mot de pass invalide!")
      }
  }
  }
}
  catch(err)
  {
  console.log(err)
  }
  
})
router.post('/loginuser',async (req, res, next) => {
  try{
  const email = req.body.email
  const password = req.body.pass
  console.log(email,password)
  const user = await User.findOne({email:email})
  if (user) {
    userok = user
    let compare = bcrypt.compareSync(password, user.password)
    if (compare)
    {
    const token  = jwt.sign({_id : user._id , typeuser: user.typeuser },"Bearer");
  
   res.cookie('jwt',token).send("ok")
    }
    else
      res.send({msg : "mot de passe invalide"})
}
  else 
  res.send({msg :"donner invalide"})
  }
  catch(err)
  {
  console.log(err)
  }
})

router.post('/sendemail',async (req, res, next) => {
  try{
    let donner = req.body.email
    console.log(donner)
      
    let content = `email: ${donner.email} \n  'nom et prenom' : ${donner.name} + {" "}   + ${donner.prenom} \n donner: ${donner.message} `;
  
    let mail = {
      from:"oussamahassanisimplon@gmail.com" ,
      to:"oussamahassanisimplon@gmail.com",  
      subject: donner.subject,
      text: content
    }
  
    transport.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  }
  
  catch(error)
  {
  console.log(error)
  }
  //next()
  }) 
  router.post('/sendemailtoproprietaire',async (req, res, next) => {
    try{
      let donner = req.body.email
      console.log(donner)
        
      let content = `email: ${donner.email} \n  'nom et prenom' : ${donner.name} + {" "}   + ${donner.prenom} \n donner: ${donner.message} `;
    
      let mail = {
        from:"oussamahassanisimplon@gmail.com" ,
        to:donner.to,  
        cc : donner.email,
        subject: donner.subject,
        text: content
      }
    
      transport.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
      })
    }
    
    catch(error)
    {
    console.log(error)
    }
    //next()
    }) 
    
  
module.exports = router;
