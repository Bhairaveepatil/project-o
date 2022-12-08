const express = require("express")
const mongoose = require('mongoose')
const router = require('./routes/User-routes')
const cookieParser = require('cookie-parser')

const cors = require('cors')
const app = express()
app.use (cors())
app.use(express.json())

app.use('/api', router)
app.use(cookieParser())

mongoose.connect('mongodb+srv://bhairavee:bhairavee@cluster0.wc4g9an.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5000)
    console.log("mongodb successfully connected and server started at port 5000")
})
.catch((err) =>{
    console.log(err)
})