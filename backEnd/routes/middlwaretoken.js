const jwt = require('jsonwebtoken');
const secret = 'Bearer';

const withAuth = function(req, res, next) {
  const token = 
      req.body.token ||
      req.headers.authorization ||
      req.cookies.token 
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
   
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
    
      } else {
     
       
        next();
      }
    });
  }
}

module.exports = withAuth;