const express = require("express");
require("./db/conn");
const Student = require("./models/student");

const app = express();
const port = process.env.PORT || 8080;

// express.json() it is the inbuilt method in express to recognize the incoming request object as an JSON Object.
app.use(express.json());
/*
app.post("/students", (req,res) => {
    const User = new Student(req.body);
    User.save().then(() =>{
        res.status(201).send(User);
    }).catch((e) =>{
        res.status(400).send(e);
    })    
})
*/ 
app.post("/students", async(req,res) =>{
    try{
        const user = new Student(req.body);
        
        const createuser = await user.save();
        res.status(201).send(createuser);

    }catch(e){res.status(400).send(e);}
})

app.get("/students", async(req,res) =>{    
    try{        
        const studentsData = await Student.find();
        console.log(studentsData);
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

app.get("/students/:id", async(req,res) =>{    
    try{ 
        const _id =req.params.id;       
        const studentData = await Student.findById(_id);
        console.log(studentData);
        res.send(studentData);
    }catch(e){
        res.send(e);
    }
})

app.listen(port,() =>{
    console.log(` i am connected at ${port}`);
})