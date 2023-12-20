
const User = require('../model/user');


//user sign up page
module.exports.signUp = function(req,res){
      
     return res.render('user_Sign');

}
//user sign in page
module.exports.signIn = function(req,res){
     
      return res.render('user_Login');
 
}

//user profile
module.exports.userProfile = function(req,res){
    
      return res.send("<h1>User profile page</h1>");
    

}
//create new user
module.exports.createUser = function (req,res){
     
      
      return res.send('<h1>User Created successfully</h1>');
     
}

//create or login user
module.exports.createSession = function(req,res){
    
      return res.redirect('/user/profile');
    

}

