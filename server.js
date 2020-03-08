const express = require('express');
const db=require('./db');
const path=require('path')
const port=3000;
const app=express();

app.get('/',(req,res,next)=>  res.sendFile(path.join(__dirname,'index.html'))
)
app.listen(port,()=>{console.log('Listening at port '+port)})

