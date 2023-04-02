const express = require("express");
const admin = express.Router();
const UserModel = require("../Models/user_model");
const bcrypt = require("bcryptjs");

admin.use(express.json());
admin.get("/read",async(req,res)=>{
    try {
        let data = await UserModel.find({});
        res.json(data);
    } catch (error) {
        res.status(404).send(error);
    }
})


admin.post("/create",async(req,res)=>{
    let payload = req.body;
    let {name,email,password} = payload;
    bcrypt.hash(password,5,async(err,hash)=>{
        if(err){
            res.json("Error Hashing Password");
        }
        else {
            try {
                await UserModel.insertMany([{name,email,password:hash,role:"Admin"}]) 
                res.json("Admin Added Succesfully");
             } catch (error) {
                res.status(404).json(error);
             }
        }
    })
})


admin.put("/update",async(req,res)=>{
    let {email} = req.body;
        try {
        await UserModel.updateOne({email:email},{$set:{role:"Admin"}});
        res.json("User Updated To admin");

    } catch (error) {
        res.status(404).json(error);
    }
})


admin.delete("/delete",async(req,res)=>{
    
    let email = req.body.email;
    console.log(email);
      try {
        await UserModel.deleteOne({email:email});
        res.json("User Removed from Data Base");
      } catch (error) {
        res.status(404).json("Error deleting user")
      }
})




module.exports={admin};
