const mongoose = require("mongoose")

// to create & connect the database 
mongoose.connect("mongodb://localhost:27017/students-api")
.then(() =>{
    console.log("connection successfully................");
}).catch((err) =>{
    console.log("No Connection");
})