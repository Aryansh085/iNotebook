const mongoose = require("mongoose");


const mongoURI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";


  
  const connectToMongo =  () =>{
    try {mongoose.connect(mongoURI);
        console.log("connected to mongodb ")
    }
    catch(err){
        console.log(err);
    }
  }

  module.exports = connectToMongo;