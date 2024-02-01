require('dotenv').config();
// console.log(process.env);
console.log('welcome to node js');
const express =require('express');
const app=express();
const port=4000;
app.get('/',(req,res)=>{
    res.send('hello i am server');
})
app.get('/youtube',(req,res)=>{
    res.send('hello i am youtube');
})

app.get('/linkdin',(req,res)=>{
    res.send('hello i am linkdin');
})
app.get('/google',(req,res)=>{
    res.send('hello i am google');
})
app.get('/login',(req,res)=>{
    res.send('<h1>login page</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(`port is start:${port}`);
})
