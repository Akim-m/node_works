const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('In Middleware');
    next();//to get to next middleware
});

app.use('/',(req,res,next)=>{
    console.log('In another Middleware');
    res.send('<h1>Hello from exp<h1/>')
});


app.listen(3000);