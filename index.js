
const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const router = express.Router();


//jwt token
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

app.use(express.static('./asset'));
app.use(expressLayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

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