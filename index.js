const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=process.env.PORT||5000;
const mongoose=require("mongoose")
const Content=require("./schema")

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://snehalatha:snehalatha@cluster0.via7zcs.mongodb.net/FirstDB?retryWrites=true&w=majority")
   .then(()=>{
    console.log("Mongodb connected successfully")
   })
   .catch((err)=>{
    console.log(err)
   })

app.get("/",(req,res)=>{
    res.send("API is working")
}) 

app.get("/users",async(req,res)=>{
    await Content.find()
    .then(found=>res.json(found))
})

app.get("/store",(req,res)=>{
    const username="test@gmail.com"
    const password="testing"
    const newData=new Content({
        username,password
    })
   newData.save()
})

app.listen(5000,()=>console.log("server started successfully"))