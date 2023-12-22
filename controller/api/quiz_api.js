
const Quiz = require('../../model/quiz');

//getting all the quizzes  on home page 
module.exports.getAllQuizzes = async function(req,res){
    
     try{

        const quizzes = await Quiz.find().populate('user','username');
         return res.json(200 , {
             message : "All quizzes as following",
             data : quizzes
         });
     }
     catch(err){
         
        console.log('error' , err);

        return res.json(500 , {
             message : "Internal Server Error"
        });
     };
}



//creating new quiz
module.exports.createQuiz = async function (req,res){
     
       try{
           const title = req.body.title;
           const questions = req.body.questions;

           //const userId = req.user.id;

           //validate users input data 
           if(!title || !questions || !Array.isArray(questions) || questions.length === 0){
              return res.status(400).json({
                 message: 'title and a non-empty array of questions are required'
               })

           }
           //create a new quiz 
           const newQuiz = await Quiz.create({
                 
                title,
               // user:userId,
                questions : questions.map((que) =>({
                      text:que.text,
                      options : que.options,
                      rightAnswer : que.rightAnswer
                }))
             
           });
           return res.status(201).json({
            message: 'User created quiz successfully',
            data: newQuiz,
          });
       }
       catch(err){
          
          console.log("error :" , err);
          
          return res.status(500).json({
            message: 'Internal Server Error',
          });

       }

}

//fetch all quizzes in home page
module.exports.getAllQuizzes = async function(req,res){
     
      try{
          const quizzes = await Quiz.find({},'title');
          res.json({quizzes});
      }
      catch(err){
        
          console.log("error" , err);
          res.status(500).json({
               message:'Internal Server Error'
          });
      }
}