
const express=require("express");  //A web application framework for Node.JS
const app=express(); //calling function express() from express module
const tasks=require('./routes/tasks'); //Require the Router that we defined in routes/tasks.js 

const connectDB=require('./db/connect'); //import db
require('dotenv').config() //import .env

const notFound=require('../starter/middleware/not-found');

app.use(express.json()) // built-in middleware function in Express & contain bundles of middleware


app.use('/api/v1/tasks',tasks); //Use the Router on the sub route /routes/tasks (line 4)
app.use(notFound); // checking invalid route

const port=8000  // calling port number 8000

const start=async()=>{ //async keyword enables asynchronous & await keyword makes js wait and used only inside async
    try{
        await connectDB(process.env.MONGO_URI)     // connecting database
        app.listen(port,console.log(`Server listening to port ${port}`)) //app.listen() method returns http.Server object

    }catch(err){
        console.log(err);
    }
}

start() //calling function start()