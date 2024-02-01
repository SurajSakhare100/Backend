require('dotenv').config();
console.log(process.env);
console.log('welcome to node js');
const express =require('express');
const serverless =require('serverless-http');
const app=express();
const router=express.Router()
const port=4000;
router.get('/',(req,res)=>{
    res.send('hello i am server');
})
router.get('/youtube',(req,res)=>{
    res.send('hello i am youtube');
})

router.get('/linkdin',(req,res)=>{
    res.send('hello i am linkdin');
})
router.get('/google',(req,res)=>{
    res.send('hello i am google');
})
router.get('/login',(req,res)=>{
    res.send('<h1>login page</h1>');
})
app.listen(process.env.PORT,()=>{
    console.log(`port is start:${port}`);
})
app.use('/.netlify/function/api',router);
module.exports.handler=serverless(app);