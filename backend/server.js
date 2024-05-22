const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.CONNECTION__STRING)
.then((resp)=>console.log("db connected"))
.catch((err)=>console.log("db dont connected"))

app.listen(process.env.PORT,(res=>{
    console.log("Port Connected");
}))

const productShema = mongoose.Schema({
    title:String,
    img:String,
    desc:String,
    price:Number,
    count:Number,
    totalPrice:Number,
})

const Products = mongoose.model("ExamFour",productShema)

app.get("/api/examfour",async (req,res)=>{
    const resp = await Products.find()
    res.send(resp)
})

app.get("/api/examfour/:id",async (req,res)=>{
    const {id} = req.params
    const resp = await Products.findById(id)
    res.send(resp)
})

app.put("/api/examfour/:id",async (req,res)=>{
    const {id} = req.params
    await Products.findByIdAndUpdate(id,{...req.body})
    res.send("item updated")
})

app.delete("/api/examfour/:id",async (req,res)=>{
    const {id} = req.params
    const resp = await Products.findByIdAndDelete(id)
    res.send("itemd deleted")
})

app.post("/api/examfour",async (req,res)=>{
    const {title,img,desc,price,count,totalPrice} = req.body
    const newProduct = new Products({
        title:title,
        img:img,
        desc:desc,
        price:price,
        count:count,
        totalPrice:totalPrice
    })
    await newProduct.save()
    res.send("new item created")
})

