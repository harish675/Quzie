
const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const router = express.Router();



//set the  view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use('/',require('./routes'));

app.listen(port , function (err){
    
      if(err){
        console.log("Error in running the server",err);
      }
      console.log("Server is running on port ", port);
});