const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")  
const Cors=require("cors")
const {courseModel}=require("./coursemodel")


const app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
app.use(Cors())
Mongoose.connect("mongodb+srv://akshayalekshmi:akshaya0810@cluster0.olkq9kj.mongodb.net/CollegeDB?retryWrites=true&w=majority")

app.post("/addcourse",async(req,res)=>{
    const data=req.body
    const ob=new courseModel(data)
    ob.save(
        (error,data)=>{
            if(error)
            {
                res.send("error occured")

            }
            else{
                res.send(data)
            }
        }
    )

    
})
app.get("/viewcourse",async(req,res)=>{
    courseModel.find(
        (error,data)=>{
            if(error)
            {
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
    
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