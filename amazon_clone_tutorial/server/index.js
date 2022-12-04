//IMPORTS FROM PACKAGES
const express = require ('express');
const mongoose=require('mongoose');

//IMPORTS FROM OTHER FILES
const authRouter=require('./routes/auth.js');

//INIT
const PORT=3000;
const app=express();
const DB="mongodb+srv://medin:Sarajevo25@cluster0.goxkug3.mongodb.net/?retryWrites=true&w=majority";

//middleware
app.use(express.json())
app.use(authRouter);

//connections
mongoose.connect(DB).then(()=>{
    console.log("connection Successful");
})
.catch((e)=>{
    console.log(e);
})

app.listen(PORT,()=>{
    console.log(`connected at port ${PORT}`);
}) //can be called from anywhere
//localhost
