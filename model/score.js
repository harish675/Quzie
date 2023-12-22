
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    
     user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'user'
     },
     quiz :{  

           type:mongoose.Schema.Types.ObjectId,
           ref : 'Quiz'
     },

     score : Number

})

const Score = mongoose.model('Score' ,scoreSchema);

module.exports = Score;
