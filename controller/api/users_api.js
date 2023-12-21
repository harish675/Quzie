
const User = require('../../model/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function(req,res){
    
    try{
     
        let user = await User.findOne({email: req.body.email});

        if(!user || user.password != req.body.password){ 
            
             return res.json(422 ,{
                 message : "Invalid User name or Password"
             });

        }

        return res.json(200,{
             
            message:'sign In successful',
            data : jwt.sign(user.toJSON(),'something',{expiresIn : 10000})
        })


    }
    catch(err){
         
        console.log("********",err);

        return res.json(500 ,{
             message : "Internal Server Error"
        });

    }
    
} ;