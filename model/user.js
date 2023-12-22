
const mongoose = require('mongoose');


const userSchema  = new  mongoose.Schema({
    
      email:{
         type:String,
         required : true,
         unique : true,
      },
      password :{
         type:String,
         required:true,
      },
      firstName:{
        type:String,
        required:true,
      },
      lastName:{
         type:String,
         required:true,
      },
      quizzes: [
         { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }
      ],
      scores: [
         { type: mongoose.Schema.Types.ObjectId, ref: 'Score' }
      ],
},{
     timestamps:true,
});

const User = mongoose.model('User',userSchema);

module.exports = User;