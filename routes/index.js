const express=require("express");
const router=express.Router();

// this is dictionary page of all the routes
const userRoute=require("./user");
const authRoute=require("./auth");
router.get("/",(req,res)=>{
   res.send("Welcome to Cyber Crime Api portal");
})

router.use("/api/user",userRoute);
router.use("/api/auth",authRoute);
module.exports=router;