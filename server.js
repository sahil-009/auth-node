require('dotenv').config()
const express = require('express');
const app=express()
const connectToDB =require(`./db/db`)
const authRouts =require ('./routes/auth-routes.js')

//connect to database
connectToDB();

//middleware
app.use(express.json())

//routes
app.use('/api/auth',authRouts)

const PORT =process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})