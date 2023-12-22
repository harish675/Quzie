
const User = require('../../model/user');
const jwt = require('jsonwebtoken');


module.exports.loginPage = function(req,res){
    
      return res.render('user_Login');
    

}

module.exports.signUp = function(req,res){
 
     return res.render('user_Sign');

}


module.exports.createUser  = async function(req,res){

    
   if(req.body.password != req.body.conform_password){
          console.log('conform password does not match');
          return res.json(200 ,{
               message : 'conform password does not match'
          });
   }
  
    try{
           //find if user is already  present or not
         let user = await User.findOne({email:req.body.email})

         if(!user){
               await User.create(req.body);
               console.log("user created successfully");s
               return res.json(200 ,{ 
                   message : "user created successfully",
                   data: user
               });
         }
         else{
               console.log("email is all ready present");
                return res.json(200,{
                     message : "email all ready present"
                });
         }
    }
    catch (error) {
         console.log("error user does not created");
         console.error(error); // Log the error for debugging
         return res.json(500,{
               message : "Internal Server Error"
         });
     }


}


// user login
module.exports.createSession = async function (req, res) {
    try {
        let user = await User.findOne({ email: req.body.email });

        if (!user || user.password !== req.body.password) {
            return res.json(422, {
                message: "Invalid User name or Password"
            });
        }

        return res.json(200, {
            message: 'Sign In successful',
            data: {
                token: jwt.sign(user.toJSON(), 'something', { expiresIn: '1h' }) // Set token expiration time
            }
        });
    } catch (err) {
        console.log("********", err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
};