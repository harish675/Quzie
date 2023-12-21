const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../model/user');
const  ExtractJwt  = require('passport-jwt');


//encryption the text

let opts = {
     jwtFromRequest :ExtractJWT.fromAuthHeaderAsBearerToken,
     secretOrKey : 'something'
}

passport.use(new JWTStrategy(opts , function(jwtPayLoad,done){
  
    User.findById(jwtPayLoad._id,function(err,user){
         
         if(err){
             console.log('Error in finding user from JWT');
             return;
         }

         if(user){
             
             return done(null,user);
         }
         else{
             
            return done(null,false);
         }
    }) 

}));


module.exports = passport;