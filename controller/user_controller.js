
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
module.exports.createUser = async function (req,res){
       
       console.log("************");
       console.log(req.body);
       console.log("*************");

      if(req.body.password != req.body.conform_password){
             console.log('conform password does not match');
             return res.redirect('back');
      }
     
       try{
              //find if user is already  present or not
            let user = await User.findOne({email:req.body.email})

            if(!user){
                  await User.create(req.body);
                  console.log("user created successfully");
                  console.log(user);
                  return res.redirect('/user/sign-in');
            }
            else{
                  console.log("email is all ready present");
                   return res.redirect('/user/sign_in');
            }
       }
       catch (error) {
            console.log("error user does not created");
            console.error(error); // Log the error for debugging
            return res.redirect('back');
        }
}

//create or login user
module.exports.createSession = function(req,res){
    
      return res.redirect('/user/profile');
    

}

