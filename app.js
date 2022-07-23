const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")

const app=Express()
app.use(Express.json({extended:false}))

app.get("/addcourse",(req,res)=>{
    res.send("Welcome to Addcourse")
})
app.get("/viewcourse",(req,res)=>{
    res.send("Welcome to Viewcourse")
})
app.get("/searchcourse",(req,res)=>{
    res.send("Welcome to Searchcourse")
})
app.get("/updatecourse",(req,res)=>{
    res.send("Welcome to Updatecourse")
})
app.get("/deletecourse",(req,res)=>{
    res.send("Welcome to Deletecourse")
})


app.listen(3000,()=>{console.log("server running on http://localhost:3000")
})