const express = require ("express");
const app = express();
const path=require("path");

app.use(function(req, res, next) {

const NewDate = new Date();
const Day =NewDate.getDay();
const Hour =NewDate.getHours();

   if ( 0<Day && Day<6&& 9<=Hour&& Hour<=17)
   {
    next() 
   }
    
    else {
         res.sendFile(path.join(__dirname, "public", "Home.html"))
    }
  })







app.use(express.static(path.join(__dirname,"public")))
const PORT= process.env.PORT || 3000;



app.listen(PORT,(err)=>
err? console.log(err) : console.log(`server is running  on port ${PORT}`)   
)