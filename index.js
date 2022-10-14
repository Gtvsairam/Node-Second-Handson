const express = require('express')

const App = express();
App.get('/',(req,res)=>{
 res.send('hello people!!');
 console.log(req);
})

App.get('/Data',(req,res)=>{
    res.send("<h1>Express</h1>  Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.");
    console.log(req);
   })



App.listen('5000',function() {
    console.log('Hello world!! ');
})