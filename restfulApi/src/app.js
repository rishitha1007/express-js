const express = require("express");
require("./db/conn");
const Student = require("./models/student");
const studentRouter = require("./routers/students");

const app = express();
const port = process.env.PORT || 8080;

// express.json() it is the inbuilt method in express to recognize the incoming request object as an JSON Object.
app.use(express.json());
app.use(studentRouter);

app.listen(port,() =>{
    console.log(` i am connected at ${port}`);
})