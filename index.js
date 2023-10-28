const express = require('express')
const app = express()
const _PORT = 5000
const msg  = "port started at 5000"
const mongoose = require("mongoose")
// password: 7jFMwzyejTPEwovv username: mazenmahmoud;
// mongodb://localhost:27017
mongoose.connect("mongodb+srv://mazenmahmoud:7jFMwzyejTPEwovv@cluster0.nopncmv.mongodb.net/dataproject")
const productsModel = require('./models/Products')
app.get('/api/courses/',async (req,res)=>{
        const products = await productsModel.find()
        res.json(products)
})
// app.get('/api/courses/:courseId',(req,res)=>{
//         const courseId = +req.params.courseId
//         const course = courses.find((course)=>course.id === courseId)
//         if(!course){
//                 return res.json({msg:"failed there is no course with this link"})
//         }
//         res.json(course)
        
// })
// app.use(express.json)

app.listen(_PORT,()=>console.log(msg))