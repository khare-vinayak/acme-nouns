const express = require('express');
const db=require('./db');
const path=require('path')
const port=3000;
const app=express();

app.get('/',(req,res,next)=>  res.sendFile(path.join(__dirname,'index.html'))
)

app.get('/api/people',async (req,res,next)=>{
   try{
        res.send(await db.models.People.findAll());

   }
   catch(ex){next(ex)}
})
app.get('/api/places',async (req,res,next)=>{
    try{
         res.send(await db.models.Places.findAll());
 
    }
    catch(ex){next(ex)}
 })
 app.get('/api/things',async (req,res,next)=>{
    try{
         res.send(await db.models.Things.findAll());
 
    }
    catch(ex){next(ex)}
 })

db.sync()
.then ( ()=> app.listen(port,()=>{console.log('Listening at port '+port)})
)
