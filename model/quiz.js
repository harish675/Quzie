
const mongoose = require('mongoose');
const User = require('./user');

//questions Schema for creating the question
const questionSchema = new mongoose.Schema({
     
    text:{
         type:String,
         required:true
    },
    options:{
       type:[String],
       required : true   
    },
    rightAnswer:{
         type:String,
         required : true
    }, 
});

//quiz schema which contains multiple questions
const quizSchema = new mongoose.Schema({
    
     title :String ,
     user :{
        
         type:mongoose.Schema.Types.ObjectId ,
         ref :'User'
     },

     questions : [questionSchema],
      
});

const Quiz = mongoose.model('Quiz' , quizSchema);

module.exports = Quiz;