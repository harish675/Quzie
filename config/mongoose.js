

const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://127.0.0.1/quiz_db');

//acquire the connection 

const db = mongoose.connection;

db.on('error', function(err){
    
     console.log(err.message);

});

db.once('open', function(){
    
      console.log("Successfully connected to the database");

});
