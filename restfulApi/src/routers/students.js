const express = require("express");
const router = new express.Router();
const Student = require("../models/student")

router.post("/students", async(req,res) =>{
    try{
        const user = new Student(req.body);
        
        const createuser = await user.save();
        res.status(201).send(createuser);

    }catch(e){res.status(400).send(e);}
})

router.get("/students", async(req,res) =>{    
    try{        
        const studentsData = await Student.find();
        console.log(studentsData);
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})

router.get("/students/:id", async(req,res) =>{    
    try{ 
        const _id =req.params.id;       
        const studentData = await Student.findById(_id);
        console.log(studentData);
        res.send(studentData);
    }catch(e){
        res.send(e);
    }
})

router.delete("/students/:id", async(req,res) =>{    
    try{        
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    }catch(e){
        res.status(500).send(e);
    }
})

router.patch("/students/:id", async(req,res) =>{    
    try{  
        const _id =req.params.id;      
        const updateStudents = await Student.findByIdAndUpdate(_id , req.body , {
            new : true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;